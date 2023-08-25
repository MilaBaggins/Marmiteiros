import { createGlobalStyle } from "styled-components";

export const StyledTypography = createGlobalStyle`



    * {
      font-family: var(--font-family-1);
      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
    }

    :root {
      --font-family-1: "Inter", sans-serif;
      --font-family-2: 'Poppins', sans-serif;

      --font-title:2rem;
      
      --font-size-1: 2.375rem;  //44px
      --font-size-2: 2.25rem;  //36px
      --font-size-3: 2rem;     //32px
      --font-size-4: 1.75rem;  //28px
      --font-size-5: 1.5rem;   //24px
      --font-size-6: 1.25rem;  //20px
      --font-size-7: 1rem;     //16px
      --font-size-8: .875rem;  //14px
      --font-size-9: .75rem;

      --font-weigth-1: 700;
      --font-weigth-2: 600;
      --font-weigth-3: 500;
      --font-weigth-4: 400;
    }


  .font-heading-1 {
    font-size: var(--font-size-1);
    font-weight: var(--font-weigth-1);
  }
  
  .font-heading-2 {
    font-size: var(--font-size-2);
    font-weight: var(--font-weigth-2);
  }
  
  .font-heading-3-500 {
    font-size: var(--font-size-3);
    font-weight: var(--font-weigth-3);
  }

  .font-heading-3-600 {
    font-size: var(--font-size-3);
    font-weight: var(--font-weigth-2);
  }

  .font-heading-4-500 {
    font-size: var(--font-size-4);
    font-weight: var(--font-weigth-3);
  }

  .font-heading-4-600 {
    font-size: var(--font-size-4);
    font-weight: var(--font-weigth-2);
  }
  
  .font-heading-5-500 {
    font-size: var(--font-size-5);
    font-weight: var(--font-weigth-3);
  }

  .font-heading-5-600 {
    font-size: var(--font-size-5);
    font-weight: var(--font-weigth-2);
  }

  .font-heading-6-500 {
    font-size: var(--font-size-6);
    font-weight: var(--font-weigth-3);
  }

  .font-heading-6-600 {
    font-size: var(--font-size-6);
    font-weight: var(--font-weigth-2);
  }

  .font-heading-7-500 {
    font-size: var(--font-size-7);
    font-weight: var(--font-weigth-3);
  }

  .font-heading-7-600 {
    font-size: var(--font-size-7);
    font-weight: var(--font-weigth-2);
  }


  //--------------FONT BODY---------------

  .font-body-1-400 {
    font-size: var(--font-size-7);
    font-weight: var(--font-weigth-4);
  }

  .font-body-1-600 {
    font-size: var(--font-size-7);
    font-weight: var(--font-weigth-2);
  }
  
  .font-body-2-400 {
    font-size: var(--font-size-8);
    font-weight: var(--font-weigth-4);
  }

  .font-body-2-500 {
    font-size: var(--font-size-8);
    font-weight: var(--font-weigth-3);
  }


//--------------FONT BUTTON---------------

.font-button-big-text {
    font-size: var(--font-size-7);
    font-weight: var(--font-weigth-2);
}

.font-button-medium-text {
    font-size: var(--font-size-8);
    font-weight: var(--font-weigth-2);
}

//--------------FONT INPUTS---------------

.font-input-placeholder {
    font-size: var(--font-size-7);
    font-weight: var(--font-weigth-4);
}

.font-input-label {
    font-size: var(--font-size-8);
    font-weight: var(--font-weigth-4);
}
  `;
