import { navBarLinks } from "./../../constants/navbar.js";
import LiComponent from "./../LiComponent";
import styles from "./styles.module.scss";

const NavBar = ({ setRoute, stateRoute }) => {
  return (
    <ul className={styles.main}>
      {navBarLinks.map((item, index) => (
        <LiComponent 
          setRoute={setRoute}
          routeUrl={item.route}
          icon={item.icon} 
          key={item.id} 
          label={item.label} 
        />
      ))}
    </ul>
  );
};

export default NavBar;
