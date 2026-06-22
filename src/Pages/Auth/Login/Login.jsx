import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogIn from "../socialLogIn/SocialLogIn";

const Login = () => {
  const { handleLogInUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log(data);
    handleLogInUser(data.email, data.password)
      .then((result) => {
        navigate(location?.state || "/");
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="min-h-screen flex items-center  lg:w-[384px] h-auto mx-auto ">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center">Welcome Back</h1>
          <p className="text-center text-gray-500 mt-1">Login with ZapShift</p>

          {/* Form */}
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="mt-6 space-y-4"
          >
            {/* Email */}
            <div>
              <label className="text-sm font-medium">Email</label>
              {/* <input {...register("exampleRequired", { required: true })} /> */}

              <input
                type="email"
                placeholder="Email"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                {...register("email", { required: true })}
                autoComplete="email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500 text-sm mt-1">email is required</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                autoComplete="password"
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 6,
                    message: "password must be at last 6 cheracters",
                  },
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 text-sm mt-1">passwor is requird</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 text-sm mt-1">
                  password must be at last 6 cheracters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500 text-sm mt-1">
                  "Password must contain uppercase, lowercase, number, special
                  character and be at least 6 characters",
                </p>
              )}
            </div>

            {/* Forgot */}
            <div className="text-right">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-green-500"
              >
                Forget Password?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold py-3 rounded-lg"
            >
              Login
            </button>
          </form>

          {/* Register */}
          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link
              to={"/register"}
              state={location.state}
              className="text-green-500 font-medium"
            >
              Register
            </Link>
          </p>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-1 border-t"></div>
            <span className="px-3 text-sm text-gray-400">Or</span>
            <div className="flex-1 border-t"></div>
          </div>

          {/* Google Login */}
          <SocialLogIn></SocialLogIn>
        </div>
      </div>
    </div>
  );
};

export default Login;
