import { StyledDivContainer } from "./style";
import footer from "../../assets/images/footer.png";

export const Footer = () => {
  return (
    <StyledDivContainer>
      <img src={footer} className="footer" alt="" />
    </StyledDivContainer>
  );
};
