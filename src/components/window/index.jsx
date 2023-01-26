import styles from "./styles.module.scss";

const Window = ({ total }) => {
  return <p className={styles.main}>Total clicks: {total}</p>;
};

export default Window;
