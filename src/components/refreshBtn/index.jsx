import { TbRefresh } from "react-icons/tb";
import styles from "./styles.module.scss";

const RefreshBtn = ({ getData }) => {
  return (
    <button className={styles.main} onClick={() => getData()}>
      <TbRefresh />
    </button>
  );
};

export default RefreshBtn;
