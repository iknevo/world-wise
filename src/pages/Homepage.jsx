import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

export default function Home() {
  return (
    <div>
      <PageNav />
      <h1>World wise</h1>
      <Link to="/app">Go to app</Link>
    </div>
  );
}
