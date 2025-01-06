import "./Button.scss";
export default function Button({ type, onClick, children }) {
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {children}
    </button>
  );
}
