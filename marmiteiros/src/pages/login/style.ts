import styled from "styled-components";

export const StyledDivContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap");

  background-image: url("../../../src/assets/images/login.jpg");
  background-size: 100%;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: var(--font-family-1);
  align-items: center;

  .woodDiv {
    width: 35%;
    background-color: #371a00;
    position: fixed;
    left: 65%;
    height: 100vh;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
