import logo from "../../assets/logo.png";

const Logo = () => {
    return (
        <div className="flex items-end">
            <img className="h-12 w-9.5 " src={logo} alt="logo" />
            <h3 className="text-3xl font-extrabold  -ms-4">ZapShift</h3>
        </div>
    );
};

export default Logo;