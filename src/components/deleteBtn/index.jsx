import { TbTrash } from "react-icons/tb";
import { DELETE } from "../../libs/HTTP";
import styles from "./styles.module.scss";

const DeleteBtn = ({ id, getData }) => {
  const deleteEl = () => {
    DELETE("categories", "/" + id).then(data => {
      // console.log(data);
      getData();
    });
  };

  return (
    <button onClick={() => deleteEl()} className={styles.main}>
      <TbTrash />
    </button>
  );
};

export default DeleteBtn;
