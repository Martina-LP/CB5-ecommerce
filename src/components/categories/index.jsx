import { useState, useEffect } from "react";
import { GET } from "../../libs/HTTP";
import Table from "../table";
import Modal from "../modal";
import styles from "./styles.module.scss";

const Categories = () => {
  const [showModal, setShowModal] = useState(false);
  const categoriesStateInit = {
    categories: [],
    loading: true
  };

  const [categoriesState, setCategoriesState] = useState(categoriesStateInit);

  const getData = () => {
    setCategoriesState({ ...categoriesState, loading: true });
    GET("categories").then(data =>
      setCategoriesState({
        loading: false,
        categories: data,
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.main}>
      {showModal && <Modal getData={getData} setShowModal={setShowModal} />}
      <h1>Categories</h1>
      <button onClick={() => setShowModal(true)} className={styles.btnCat}>Add new item</button>
      <Table
        categoriesState={categoriesState.categories}
        loading={categoriesState.loading}
        getData={getData}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default Categories;
