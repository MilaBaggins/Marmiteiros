import { StyledDivContainer } from "./style";
import logo from "../../assets/images/logoGreen.png";
import { StyledButtons } from "../../components/buttons/style";

export const LandingPage = () => {
  return (
    <StyledDivContainer>
      <div className="yellowDiv"></div>
      <div className="whiteDiv">
        <img src={logo} alt="" />
        <h1>Plan your food smart & easy!</h1>
        <StyledButtons>
          <div className="buttons">
            <button className=" defaultSizeYellow">Login </button>
            <div className="span">
              <span>
                Are you not a member yet? Register bellow and join us!
              </span>
            </div>

            <button className=" defaultSizeOrange">Cadastre-se </button>
          </div>
        </StyledButtons>
      </div>
    </StyledDivContainer>
  );
};
