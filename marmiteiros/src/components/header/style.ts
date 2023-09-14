import styled from "styled-components";

export const StyledDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 93%;
  height: 180px;
  align-items: center;

  .navBar {
    position: fixed;
    top: 30px;
    width: 92%;
    display: flex;
    justify-content: space-between;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 40%;

    img {
      margin-top: 20px;
      width: 220px;
    }
  }

  .menuItens {
    display: flex;
    gap: 60px;
    justify-content: end;
    align-items: center;
    width: 60%;
  }

  .buttons {
    margin-left: 90px;
    margin-bottom: 15px;
    display: flex;
    width: 90%;
    justify-content: space-between;
  }

  .profileImg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 53px;
    border-radius: 50%;
    background-color: var(--color-brand-1);
  }

  .ImgLogout {
    cursor: pointer;
  }
`;
