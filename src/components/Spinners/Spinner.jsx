import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className={styles.spinner}></div>
    </div>
  );
}

export default Spinner;
