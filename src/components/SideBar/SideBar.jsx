import AppNav from "../AppNav/AppNav";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
// import styles from "./Sidebar.module.css";
export default function SideBar() {
  return (
    <div className="basis-[56rem] bg-dark-2 pt-12 pr-20 pb-14 pl-20 flex flex-col items-center h-[calc(100vh-4.8rem)]">
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
}
