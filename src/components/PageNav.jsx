import { NavLink } from "react-router-dom";

const pages = ["home", "pricing", "product"];

export default function PageNav() {
  return (
    <nav>
      <ul>
        {pages.map((page, i) => (
          <li key={i}>
            <NavLink to={`/${page}`}>
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
