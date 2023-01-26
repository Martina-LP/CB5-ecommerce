import styles from "./styles.module.scss";

const CounterBtn = ({ counter, setCounter }) => {
  return (
    <div className={styles.main}>
      <p>Let's trigger the counter:</p>
      <button onClick={() => setCounter(counter + 1)}>Click to add +1</button>
    </div>
  );
};

export default CounterBtn;
