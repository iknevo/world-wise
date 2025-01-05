import { NavLink } from "react-router-dom";
import "./PageNav.scss";
import { Logo } from "../";

export default function PageNav() {
  return (
    <nav className="flex justify-between items-center">
      <Logo />
      <ul className="flex items-center gap-16 list-none">
        <li>
          <NavLink to="/pricing" className="nav__link">
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" className="nav__link">
            Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="nav__link cta-link">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
