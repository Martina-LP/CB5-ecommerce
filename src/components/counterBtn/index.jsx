import styled from "styled-components";
// import styles from "./styles.module.scss";

const CounterBtn = ({ counter, setCounter }) => {
  return (
    <Container>
      <Paragraph>Let's trigger the counter:</Paragraph>
      <Counter onClick={() => setCounter(counter + 1)}>Click to add +1</Counter>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
`;

const Paragraph = styled.p`
  margin-top: 12px;
  font-size: 20px;
  font-weight: bold;
`;

const Counter = styled.button`
  height: 40px;
  width: 110px;
  border: 2px solid goldenrod;
  border-radius: 6px;
  background: transparent;
  font-weight: bold;
  margin: 12px 4px;
  padding: 2px;
  &:hover {
    background: goldenrod;
    color: white;
    border: 2px solid black;
  }
`;

export default CounterBtn;
