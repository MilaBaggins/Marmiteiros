import { StyledDivContainer } from "./style";
import { LoginForm } from "../../components/form/login";
import black from "../../assets/images/black_background.png";
/* import { StyledButtons } from "../../components/buttons/style"; */

export const LoginPage = () => {
  return (
    <StyledDivContainer>
      <img src={black} className="black" alt="" />

      <LoginForm />
    </StyledDivContainer>
  );
};
