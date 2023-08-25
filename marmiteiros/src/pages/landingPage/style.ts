import styled from "styled-components";

export const StyledDivContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap");

  background-image: url("../../../src/assets/images/landingPage.jpg");
  background-size: 100%;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;

  font-family: var(--font-family-1);

  img {
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
  }

  .yellowDiv {
    background-color: var(--color-brand-1);
    position: fixed;
    top: 5px;
    margin-left: 45vw;
    width: 23vw;
    height: 99vh;
    opacity: 90%;
    border-radius: 6px;
  }

  .whiteDiv {
    background-color: var(--color-white);
    margin-top: 40px;
    margin-left: 18vw;
    width: 390px;
    height: 580px;
    opacity: 92%;
    border-radius: 6px;
    padding: 30px;
    display: inline-block;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    line-height: 45px;
    color: var(--color-gray-0);
    letter-spacing: 1px;
    display: block;
    word-wrap: break-word;
    border: var(--box-shadow-1);
  }

  img {
    position: sticky;
    width: 200px;
  }

  h1 {
    font-size: var(--font-size-1);
    font-family: "Poppins", sans-serif;
  }
`;
