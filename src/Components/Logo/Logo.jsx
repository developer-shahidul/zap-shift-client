import { Link } from "react-router";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <Link to="/" className="flex items-end">
      <img className="h-12 w-9.5 " src={logo} alt="logo" />
      <h3 className="text-3xl font-extrabold  -ms-4">ZapShift</h3>
    </Link>
  );
};

export default Logo;
