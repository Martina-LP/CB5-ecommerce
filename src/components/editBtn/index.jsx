import { useState } from "react";
import EditModal from "./../editModal";
import { TbEdit } from "react-icons/tb";
import styles from "./styles.module.scss";

const EditBtn = ({ data, getData }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <EditModal getData={getData} data={data} setShowModal={setShowModal} />
      )}

      <button onClick={() => setShowModal(true)} className={styles.main}>
        <TbEdit />
      </button>
    </>
  );
};

export default EditBtn;
