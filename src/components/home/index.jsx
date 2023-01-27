import { useState } from "react";
import CounterBtn from "../counterBtn";
import Window from "../window";
import Title from "../title";
import styled from "styled-components";
// import styles from "./styles.module.scss";

const Home = () => {
  const [counter, setCounter] = useState(0);

  const Main = styled.div`
    min-height: 300px;
    width: 100%;
    background-color: white;
    border-radius: 8px;
    padding: 20px;
  `;

  return (
    <Main>
      <Title title="Home" />
      <Window total={counter} />
      <CounterBtn counter={counter} setCounter={setCounter} />
    </Main>
  );
};

export default Home;
