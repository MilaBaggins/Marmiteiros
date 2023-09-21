import { StyledDivContainer } from "./style";
import imgLogo from "../../assets/images/logoWhite.png";
import imgLogout from "../../assets/images/logout.png";
import { StyledButtons } from "../buttons/style";

export const Header = () => {
  return (
    <StyledDivContainer>
      <nav className="navBar">
        <div className="logo">
          <img src={imgLogo} alt="" />
        </div>
        <div className="menuItens">
          <StyledButtons>
            <div className="buttons">
              <button className="menuTransparent">Lista de compras</button>
              <button className="menuTransparent">Sobre</button>
              <button className="menuTransparent">Contatos</button>
            </div>
          </StyledButtons>

          <div className="profileImg">CS</div>
          <img src={imgLogout} className="ImgLogout" alt="" />
        </div>
      </nav>
    </StyledDivContainer>
  );
};
