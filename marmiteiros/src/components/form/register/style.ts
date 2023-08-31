import styled from "styled-components";

export const Container = styled.section`
  > form {
    margin-top: 5rem;

    h3 {
      font-weight: 600;
    }
  }

  @media (min-width: 728px) {
    > form {
      margin-top: 120px;
    }
  }
`;
