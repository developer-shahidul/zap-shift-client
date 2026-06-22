import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUserCircle } from "react-icons/fa";
import { GoArrowUp } from "react-icons/go";
import useAuth from "../../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogIn from "../../socialLogIn/SocialLogIn";
import axios from "axios";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleRegisterUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    console.log("after register", data.photo[0]);

    const profileImg = data.photo[0];

    handleRegisterUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        // store the img and the photo url
        const formData = new FormData();
        formData.append("image", profileImg);

        axios
          .post(
            `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`,
            formData,
          )
          .then((res) => {
            console.log("after img upload", res.data.data.url);

            // update user profile
            const userProfile = {
              displayName: data.name,
              photoURL: res.data.data.url,
            };

            updateUserProfile(userProfile)
              .then(() => console.log("user profile updated done"))
              .catch((error) => console.log(error));

            navigate(location?.state || "/");
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="min-h-screen flex items-center  lg:w-[384px] h-auto mx-auto">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          {/* Title */}
          <h1 className="text-4xl font-bold ">Create an Account</h1>

          <p className=" text-gray-500 mt-2">Register with ZapShift</p>
          {/* Profile Icon */}
          <div className="flex justify-start mt-5">
            <div className="relative">
              <FaUserCircle className="text-5xl text-gray-300" />

              <span className="absolute bottom-0 right-0 bg-lime-400 rounded-full p-1 text-xs">
                <GoArrowUp></GoArrowUp>
              </span>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="space-y-4 mt-6"
          >
            {/* Name */}
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                {...register("name", {
                  required: true,
                })}
              />

              {errors.name?.type === "required" && (
                <p className="text-red-500 text-sm mt-1">Name is required</p>
              )}
            </div>

            {/* Photo URL */}
            <div>
              <label className="text-sm font-medium">Photo URL</label>

              <input
                type="file"
                placeholder="Photo URL"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                {...register("photo", {
                  required: true,
                })}
              />

              {errors.photo?.type === "required" && (
                <p className="text-red-500 text-sm mt-1">
                  Photo URL is required
                </p>
              )}
            </div>

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
            <div className="relative">
              <label className="text-sm font-medium">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                autoComplete="password"
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-3 text-sm text-gray-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>

              {errors.password?.type === "required" && (
                <p className="text-red-500 text-sm mt-1">
                  Password is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 text-sm mt-1">
                  Password must be at least 6 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500 text-sm mt-1">
                  Password must contain uppercase, lowercase, number, special
                  character and be at least 6 characters
                </p>
              )}
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-lime-400 hover:bg-lime-500 py-3 rounded-lg font-semibold transition"
            >
              Register
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Alredy have an account?{" "}
            <Link
              to={"/login"}
              state={location.state}
              className="text-green-500 font-medium"
            >
              Login
            </Link>
          </p>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-1 border-t"></div>

            <span className="px-3 text-gray-400 text-sm">OR</span>

            <div className="flex-1 border-t"></div>
          </div>

          {/* Google Login */}
          <SocialLogIn></SocialLogIn>
        </div>
      </div>
    </div>
  );
};

export default Register;
