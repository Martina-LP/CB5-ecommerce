import NavBar from "../navbar";
import styles from "./styles.module.scss";

const Container = () => {
  return (
    <div className={styles.main}>
      <div className={styles.leftColumn}>
        <NavBar />
      </div>
      <div className={styles.rightColumn}></div>
    </div>
  );
};

export default Container;
