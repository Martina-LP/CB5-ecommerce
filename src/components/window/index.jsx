import styled from "styled-components";
// import styles from "./styles.module.scss";

const Window = ({ total }) => {
  const Total = styled.p`
    margin-top: 12px;
    font-size: 18px;
    font-weight: bold;
  `;

  return <Total>Total clicks: {total}</Total>;
};

export default Window;
