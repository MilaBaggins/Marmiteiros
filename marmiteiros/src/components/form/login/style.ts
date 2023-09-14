import styled from "styled-components";

export const StyledFormLogin = styled.form`
  position: fixed;
  display: flex;
  height: 530px;
  min-width: 400px;
  flex-direction: column;
  border-radius: 22px;
  gap: 20px;
  margin-left: 350px;
  background-color: var(--color-gray-7);
  opacity: 70%;

  .buttons {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    height: 110px;
    min-width: 100%;
    button {
      width: 100%;
    }
  }

  .greenDetail {
    width: 65%;
    border-radius: 0pc 4px 4px 0px;
    height: 40px;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 60px;
    padding-left: 35px; /* 
    background-color: var(--color-brand-3); */
  }

  h2 {
    font-weight: lighter;
    font-size: 22px;
    letter-spacing: 3px;
    line-height: 30px;
    color: var(--color-gray-1);
  }

  .formLoginDiv {
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 10px;
    width: 100%;
    height: 80%;
  }

  h4 {
    color: var(--color-alert1);
    font-size: 10px;
    height: 1px;
  }

  label {
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
  }
  input {
    padding: 7px;
    border-radius: 4px;
    border: 1px solid var(--color-gray-3);
  }
  span {
    font-weight: 500;
    font-size: 11px;
    line-height: 24px;
    margin-left: 70px;
    color: var(--color-gray-2);
    width: 100%;
    max-width: 300px;
    @media (min-width: 768px) {
      margin-left: 160px;
    }
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: var(--color-gray-2);
    text-align: center;
    margin-top: 12px;
    margin-bottom: 12px;
  }
`;
