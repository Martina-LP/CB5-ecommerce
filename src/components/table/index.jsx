import RefreshBtn from "../refreshBtn";
import EditBtn from "../editBtn";
import DeleteBtn from "../deleteBtn";
import styles from "./styles.module.scss";

const Table = ({ categoriesState, getData, loading }) => {
  return (
    <div className={styles.main}>
      <div className={styles.tableHead}>
        <div className={styles.description}>
          <p>ID</p>
          <p>IMG</p>
          <p>Name</p>
        </div>
        <RefreshBtn getData={getData} />
      </div>
      {loading ? (
        "loading..."
      ) : (
        <div className={styles.tableBody}>
          {categoriesState.map(item => (
            <div className={styles.tableRow} key={item.id}>
              <p>{item.id}</p>
              <img src={item.image} alt={item.name} />
              <p className={styles.name}>{item.name.substring(0, 20)}</p>
              <div className={styles.btn}>
                <EditBtn
                  getData={getData}
                  data={{ name: item.name, image: item.image, id: item.id }}
                 />
                <DeleteBtn 
                  getData={getData}
                  id={item.id}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Table;
