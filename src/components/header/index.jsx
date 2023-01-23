import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <h1>Dashboard</h1>
      </div>
      <div className={styles.btn}></div>
    </div>
  );
};

export default Header;
