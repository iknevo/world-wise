import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

const pages = ["pricing", "product", "login"];

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        {pages.map((page, i) => (
          <li key={i}>
            <NavLink to={`/${page}`}>{page}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
