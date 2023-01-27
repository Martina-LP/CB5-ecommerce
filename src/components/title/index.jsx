import styled, { css } from "styled-components";

const Title = ({ title }) => {
  const Title = styled.h1`
    margin-bottom: 12px;
    font-size: 24px;
    border-bottom: 2px dotted goldenrod;
    /* ${props =>
      props.primary &&
      css`
        background: rebeccapurple;
        color: #404040;
        font-size: 12px;
      `} */
  `;

  return (
    <>
      <Title>{title}</Title>
    </>
  );
};

export default Title;
