import { StyledButtons } from "../buttons/style";
import { StyledDivContainer } from "./style";

export const FilterHome = () => {
  return (
    <StyledDivContainer>
      <StyledButtons>
        <div className="filter">
          <p className="smallTransparent">Semana 1</p>
          <p className="smallTransparent">Semana 2</p>
          <p className="smallTransparent">Semana 3</p>
          <p className="smallTransparent">Semana 4</p>
          <p className="smallTransparent">Semana 5</p>
          <p className="smallTransparent">Pratos</p>
          <button>Cadastrar Prato</button>
        </div>
      </StyledButtons>
    </StyledDivContainer>
  );
};
