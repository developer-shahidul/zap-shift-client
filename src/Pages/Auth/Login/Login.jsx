import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log(data);
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
                {...register("exampleRequired", { required: true })}
                type="email"
                placeholder="Email"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                {...register("email", { required: "email is required" })}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
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
              />
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
            <a href="#" className="text-green-500 font-medium">
              Register
            </a>
          </p>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-1 border-t"></div>
            <span className="px-3 text-sm text-gray-400">Or</span>
            <div className="flex-1 border-t"></div>
          </div>

          {/* Google Login */}
          <button
            // onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 border py-3 rounded-lg hover:bg-gray-100"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
              alt="google"
            />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
