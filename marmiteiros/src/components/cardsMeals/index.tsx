import { StyledButtons } from "../buttons/style";
import { StyledDivContainer } from "./style";
import strogonoff from "../../assets/images/brocolis.png";

export const CardsMeal = () => {
  return (
    <StyledDivContainer>
      <div className="cardDiv">
        <div className="img">
          <img src={strogonoff} alt="" />
        </div>

        <div className="infos">
          <h3>Brócolis gratinado com arroz</h3>
          <small>Selecione a semana abaixo</small>
          <StyledButtons>
            <div className="buttonsDiv">
              <button className="smallSizeOrange">S1</button>
              <button className="smallSizeOrange">S2</button>
              <button className="smallSizeOrange">S3</button>
              <button className="smallSizeOrange">S4</button>
              <button className="smallSizeOrange">S5</button>
            </div>
          </StyledButtons>
        </div>
      </div>
    </StyledDivContainer>
  );
};
