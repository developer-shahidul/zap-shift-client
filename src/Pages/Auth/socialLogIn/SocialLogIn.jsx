import { useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";

const SocialLogIn = () => {
  const navigate = useNavigate();
  const { signInGoogle } = useAuth();
  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {/* Google Login */}
      <button
        onClick={handleGoogleLogin}
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
  );
};

export default SocialLogIn;
