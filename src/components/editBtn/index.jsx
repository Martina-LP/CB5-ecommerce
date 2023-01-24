import styles from "./styles.module.scss";
import { TbEdit } from "react-icons/tb";

const EditBtn = ({ method }) => {
  return (
    <button onClick={() => method()} className={styles.main}>
      <TbEdit />
    </button>
  );
};

export default EditBtn;
