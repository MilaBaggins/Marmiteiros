import styled from "styled-components";

export const StyledDivContainer = styled.div`
  .cardDiv {
    width: 100%;
    height: 120px;
    border-radius: 8px;
    background-color: var(--color-white);
    border: 2px solid var(--color-brand-2);
    display: flex;
    align-items: center;
  }

  .img {
    background-color: red;
    width: 35%;
    height: 100%;
    object-fit: inherit;
    overflow: hidden;
    display: flex;
    justify-content: center;

    img {
      height: 100%;
      border-radius: 8px;
    }
  }

  .infos {
    width: 65%;
    font-family: var(--font-family-1);
    padding: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    word-wrap: break-word;
    h3 {
    }
    small {
      color: var(--color-gray-3);
    }
  }

  .buttonsDiv {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;
