import "./Style.scss";
export default function Footer() {
  return (
    <footer className="footer">
      <p className="copyright">
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </footer>
  );
}
