import { useState } from "react";
import { PUT } from "../../libs/HTTP";
import styles from "./styles.module.scss";

const LiProduct = ({ item, deleteEl, reloadItems }) => {
  const [formData, setFormData] = useState({
    title: item.title,
    price: item.price,
    description: item.description,
    categoryId: item.category.id,
    images: [item.images[0]],
  });

  const [showForm, setShowForm] = useState(false);

  const handleForm = (input, e) => {
    let inputValue = e.target.value ? e.target.value : 0;
    if (input === "price" || input === "categoryId") {
      inputValue = parseInt(inputValue);
    };

    if (input === "images") {
      inputValue = [inputValue];
    };

    setFormData({
      ...formData,
      [input]: inputValue,
    });
  };

  const submitForm = e => {
    e.preventDefault();
    PUT("products", formData, item.id)
      .then(res => res.json())
      .then(data => {
        setShowForm(false);
        reloadItems();
        console.log(data);
      });
  };

  return (
    <div className={styles.main}>
      <li><img src={item.images} alt={item.title} /></li>
      <li>{item.title}</li>
      <button className={styles.btnPro} onClick={() => setShowForm(!showForm)}>Edit</button>
      <button className={styles.btnPro} onClick={() => deleteEl(item.id)}>Remove</button>
      {showForm && (
        <form onSubmit={e => submitForm(e)}>
          <input
            value={formData.title.substring(0, 40)}
            onChange={e => handleForm("title", e)}
            type="text"
          />
          <input
            value={formData.price}
            onChange={e => handleForm("price", e)}
            type="text"
          />
          <input
            value={formData.description.substring(0, 60)}
            onChange={e => handleForm("description", e)}
            type="text"
          />
          <input
            value={formData.categoryId}
            onChange={e => handleForm("categoryId", e)}
            type="text"
          />
          <input
            value={formData.images[0]}
            onChange={e => handleForm("images", e)}
            type="text"
          />
          <input className={styles.btnSend} type="submit" value="Send" />
        </form>
      )}
    </div>
  );
};

export default LiProduct;
