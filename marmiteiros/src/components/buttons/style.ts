import styled from "styled-components";

export const StyledButtons = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap");
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  /* 
  .buttons {
    background-color: blue;
  } */

  .defaultSizeOrange {
    background-color: var(--color-brand-2);
    color: var(--color-white);
    border-radius: 6px;
    width: 100%;
  }

  .span {
    line-height: 22px;
    width: 90%;
    padding: 20px;
    font-size: var(--font-size-8);
    color: var(--color-brand-3);
  }

  .defaultSizeYellow {
    background-color: var(--color-brand-1);
    color: var(--color-gray-1);
    border-radius: 6px;
    width: 100%;
  }

  .smallSizeOrange {
    background-color: var(--color-brand-2);
    padding: 5px;
    border-radius: 8px;
    width: 30px;
    color: var(--color-white);
    font-size: var(--font-size-9);
  }

  .smallTransparent {
    background-color: var(--color-brand-1);
    font-weight: lighter;
    font-family: var(--font-family-1);
    color: var(--color-white);
    letter-spacing: 3px;
    font-size: var(--font-size-8);
  }

  .menuTransparent {
    font-weight: var(--font-weigth-4);
    font-family: "Poppins", sans-serif;
    color: var(--color-white);
    letter-spacing: 4px;
    font-size: var(--font-size-7);
    background-color: transparent;
  }
`;
