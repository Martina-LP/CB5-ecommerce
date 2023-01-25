import CategoryForm from "../categoryForm";
import { MdClose } from "react-icons/md";
import styles from "./styles.module.scss";

const Modal = ({ setShowModal, data, getData }) => {
  return (
    <div className={styles.cover}>
      <div className={styles.modal}>
        <button onClick={() => setShowModal(false)}><MdClose /></button>
        <CategoryForm
          data={data}
          getData={getData}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
};

export default Modal;
