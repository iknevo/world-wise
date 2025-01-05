import AppNav from "../AppNav/AppNav";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
import styles from "./Sidebar.module.css";

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>cities list ...</p>
      <Footer />
    </div>
  );
}
