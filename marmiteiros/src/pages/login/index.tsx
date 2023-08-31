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
    </StyledDivContainer>
  );
};
