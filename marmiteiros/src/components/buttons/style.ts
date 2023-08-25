import styled from "styled-components";

export const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  padding: 35px;

  .defaultSizeOrange {
    background-color: var(--color-brand-2);
    color: var(--color-white);
    border-radius: 6px;
    width: 80%;
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
    width: 80%;
  }

  .smallSizeOrange {
    background-color: var(--color-brand-2);
    padding: 4px 1px 4px 1px;
    border-radius: 8px;
    width: 10%;
  }

  .smallTransparent {
    background-color: var(--color-brand-1);
    font-weight: lighter;
    font-family: var(--font-family-1);
    color: var(--color-white);
    letter-spacing: 3px;
    font-size: var(--font-size-9);
  }

  .menuTransparent {
    font-weight: lighter;
    font-family: var(--font-family-1);
    color: var(--color-white);
    letter-spacing: 3px;
    font-size: var(--font-size-6);
  }
`;
