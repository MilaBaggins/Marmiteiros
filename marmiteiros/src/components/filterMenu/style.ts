import styled from "styled-components";

export const StyledDivContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap");

  width: 100%;
  display: flex;
  font-family: var(--font-family-1);

  .filter {
    position: fixed;
    top: 140px;
    opacity: 80%;
    width: 93%;
    background-color: var(--color-brand-1);
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 8px;
  }
`;
