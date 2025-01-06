import { NavLink } from "react-router-dom";
import "./AppNav.scss";

export default function AppNav() {
  return (
    <nav className="mt-12 mb-8">
      <ul className="list-none flex bg-dark-3 rounded-xl">
        <li>
          <NavLink to="cities" className="nav-link">
            Cities
          </NavLink>
        </li>
        <li>
          <NavLink to="countries" className="nav-link">
            Countries
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
