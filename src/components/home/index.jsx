import { useState } from "react";
import CounterBtn from "../counterBtn";
import Window from "../window";
import styles from "./styles.module.scss";

const Home = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className={styles.main}>
      <h1>Home</h1>

      <Window total={counter} />
      <CounterBtn counter={counter} setCounter={setCounter} />
    </div>
  );
};

export default Home;
