import { useState } from "react";
import styles from './styles.module.scss';

const Header = () => {
  const [classes, setClasses] = useState([styles.test1, styles.test2]);
  
  const addAnotherClass = () => {
    setClasses([...classes, styles.test3]);
  };

  return (
    <div className={styles.main}>
      <div onClick={() => addAnotherClass()} className={styles.logo}>
        <h1 className={classes.join(" ")}>Your Dashboard</h1>
      </div>
      <div className={styles.btn}>Panel</div>
    </div>
  );
};

export default Header;
