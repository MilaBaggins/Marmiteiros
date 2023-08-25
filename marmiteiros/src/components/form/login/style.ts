import styled from "styled-components";

export const FormLog = styled.form`
  position: fixed;
  display: flex;
  width: 90%;
  height: 70%;
  max-width: 310px;
  flex-direction: column;
  border-radius: 4px;
  gap: 20px;
  margin: 0 auto;
  margin-top: 70px;
  background-color: var(--color-white);

  position: fixed;
  top: 10%;
  left: 0%;
  right: 0%;
  bottom: 0%;

  .orangeDetail {
    width: 80%;
    border-radius: 0pc 4px 4px 0px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    background-color: orange;
  }

  h3 {
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 8px;
    line-height: 30px;
    color: var(--color-white);
  }

  .formLoginDiv {
    margin-top: 40px;
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
      margin-left: 120px;
    }
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: var(--color-gray-2);
    text-align: center;
  }
`;
