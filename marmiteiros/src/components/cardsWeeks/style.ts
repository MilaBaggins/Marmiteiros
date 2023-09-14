import styled from "styled-components";

export const StyledDivContainer = styled.div`
  .cardDiv {
    width: 250px;
    height: 350px;
    border-radius: 8px;
    background-color: var(--color-white);
    border: 2px solid var(--color-brand-2);
  }

  .infos {
    font-family: var(--font-family-1);
    padding: 20px;
    height: 58%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    word-wrap: break-word;
    h2 {
      font-size: 22px;
      margin-bottom: 12%;
    }
    small {
      color: var(--color-gray-3);
    }
  }
`;
