import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        src="/logo.png"
        alt="WorldWise logo"
        className="h-[5.2rem] cursor-pointer"
      />
    </Link>
  );
}

export default Logo;
