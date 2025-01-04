import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

const pages = ["home", "pricing", "product"];

export default function PageNav() {
  return (
    <nav className={styles.nav}>
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
