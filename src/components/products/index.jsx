import { useEffect, useState } from "react";
import { GET, DELETE } from "../../libs/HTTP";
import LiProduct from "../LiProduct";
import styles from "./styles.module.scss";

const Products = () => {
  const [products, setProducts] = useState([]);

  const reloadItems = () => {
    GET("products").then(data => {
      console.log(data);
      setProducts(data);
    });
  };

  useEffect(() => {
    reloadItems();
  }, []);

  const deleteEl = id => {
    DELETE("products", id).then(data => {
      if (data.status === 200) {
        reloadItems();
      }
    });
  };

  return (
    <div className={styles.main}>
      <h1>Products</h1>
      <ul className={styles.items}>
        {products.map((item, index) => (
          <LiProduct
            reloadItems={reloadItems}
            deleteEl={deleteEl}
            item={item}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;
