import { StyledDivContainer } from "./style";
import logoKenzie from "../../../src/assets/images/kenzie.png";

export const RegisterPage = () => {
  return (
    <StyledDivContainer>
      <img src={logoKenzie} alt="" />
      <h1>KENZIE ACADEMY</h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi iure
        praesentium, <b>nulla</b> asperiores ad molestias culpa laboriosam atque
        aliquam voluptatibus numquam dolorum eum officia adipisci optio vel sed,
        impedit officiis.
      </p>
      <br />
      <ul>
        <li>Lorem ipsum dolor sit amet consectetu</li>
        <li>asperiores ad molestias culpa</li>
        <li>laboriosam atque aliquam voluptatibus</li>
        <li>laboriosam atque aliquam voluptatibus</li>
      </ul>
      <br />
      <ol>
        <li>Lorem ipsum dolor sit amet consectetu</li>
        <li>asperiores ad molestias culpa</li>
        <li>laboriosam atque aliquam voluptatibus</li>
        <li>laboriosam atque aliquam voluptatibus</li>
      </ol>
      <br />
      <p>
        Para saber mais, acesse nosso <a href="https://kenzie.com.br/">site</a>{" "}
        e saiba mais!
      </p>
    </StyledDivContainer>
  );
};
