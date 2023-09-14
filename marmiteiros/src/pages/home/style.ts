import styled from "styled-components";

export const StyledDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;

  .background {
    position: fixed;
    width: 100vw;
    height: 30%;
  }

  .black {
    position: fixed;
    width: 100vw;
    height: 31%;
    opacity: 40%;
  }

  .black2 {
    position: fixed;
    width: 100vw;
    height: 100%;
    opacity: 30%;
  }

  .backgroundDIvGray {
    width: 93%;
    border-radius: 8px;
    opacity: 96%;
    display: flex;
    gap: 40px;
    position: absolute;
    top: 33%;
  }

  .weeksContainer {
    position: sticky;
    width: 68%;
    height: 600px;
    border-radius: 8px;
    background-color: var(--color-white);
    padding: 10px 20px 10px 20px;
    overflow-y: auto;
    margin-bottom: 100px;
  }

  .mealsContainer {
    width: 28%;
    height: 430px;
    border-radius: 8px;
    background-color: var(--color-white);
    padding: 0px 30px 30px 30px;
    position: fixed;
    top: 33%;
    left: 68%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;

    p {
      font-family: var(--font-family-1);
      font-weight: 500;
      color: var(--color-brand-3);
      margin-bottom: 10px;
      font-size: 18px;
    }
  }

  .cardsMeal {
    margin-top: 74px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .header {
    width: 358px;
    background-color: var(--color-white);
    position: fixed;
    height: 74px;
    display: flex;
    padding: 35px 0px 10px 0px;
    align-items: center;
  }

  .week {
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 10px;
    overflow-x: auto;

    p {
      font-family: var(--font-family-1);
      font-weight: 500;
      color: var(--color-brand-3);
      margin-bottom: 18px;
      font-size: 18px;
    }
  }

  .cards {
    display: flex;
    gap: 20px;
  }

  .footer {
    bottom: 0px;
    position: fixed;
  }
`;
