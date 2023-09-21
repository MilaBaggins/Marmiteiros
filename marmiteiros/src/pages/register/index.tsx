import { FormRegister } from "../../components/form/register";
import { StyledDivContainer } from "./style";
import black from "../../assets/images/black_background.png";

export const RegisterPage = () => {
  return (
    <StyledDivContainer>
      <img src={black} className="black" alt="" />
      <FormRegister />
    </StyledDivContainer>
  );
};
