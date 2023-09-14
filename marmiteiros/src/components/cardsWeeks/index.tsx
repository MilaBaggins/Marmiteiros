import { StyledDivContainer } from "./style";
import strogonoff from "../../assets/images/brocolis.png";
import { StyledButtons } from "../buttons/style";

export const CardsWeek = () => {
  return (
    <StyledDivContainer>
      <div className="cardDiv">
        <img src={strogonoff} alt="" />
        <div className="infos">
          <h2>Brócolis gratinado com arroz</h2>
          <small>Almoço</small>
          <StyledButtons>
            <button className="defaultSizeOrange">Ver detalhes</button>
          </StyledButtons>
        </div>
      </div>
    </StyledDivContainer>
  );
};
