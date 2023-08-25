import { StyledDivContainer } from "./style";
import wood from "../../assets/images/loginWood.jpg";
import { LoginForm } from "../../components/form/login";
/* import { StyledButtons } from "../../components/buttons/style"; */

export const LoginPage = () => {
  return (
    <StyledDivContainer>
      <div className="woodDiv">
        <img src={wood} alt="" />
      </div>

      <LoginForm />
      {/* <StyledButtons>
          <button className=" defaultSizeYellow">Login </button>
          <div className="span">
            <span>
              if you are not a member yet, register bellow and join us!
            </span>
          </div>

          <button className=" defaultSizeOrange">Register </button>
        </StyledButtons> */}
    </StyledDivContainer>
  );
};
