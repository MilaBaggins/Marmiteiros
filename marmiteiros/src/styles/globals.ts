import { createGlobalStyle } from "styled-components";

export const StyledGlobals = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap");
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
      }
      
      a{
        cursor: pointer;
      }

      span{
        cursor: pointer;
      }

      button{
        cursor: pointer;
        font-family: "Poppins", sans-serif;
        border-radius: 4px;
        font-weight: 600;
        outline: none;
        border: none;
        padding: 13px 22px 13px 22px;
        letter-spacing: 1px;
        font-size: var(--font-size-8);
      }
  :root {
    /* --border-radius-1: .5rem;
    --border-radius-2: .3125rem; */
  }

  .App{
    background-color: red;
  }

  .input-focus {
    border-color: var(--color-gray-100);
  }

  .resize-img {
    transform: scale(1.5) translateY(-1.25rem);
  }

  li:hover .resize-img{
    animation: anim-resize-img 1s linear infinite forwards;
  } 

  li:hover .adjust-img{
    animation: anim-adjust-img 1s linear infinite forwards;
  } 

  .resize-img-cart {
    transform: scale(1.5) translateY(-0.625rem);
  }

  .adjust-img {
    transform: translateY(-0.625rem);
    hover{
      animation: anim-adjust-image 1s linear infinite forwards;
    }
  }
  
  .adjust-img-cart {
    transform: translateY(-0.3125rem);
  }

  body::-webkit-scrollbar {
    display: none;
  }


  main {
    display: flex;
    justify-content: space-between;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

/*   .container {
    width: 100%;
    max-width: 82rem;
    margin: 0 auto;
  } */
  
  fieldset > input.input-error{
    border-color: var(--color-negative);
    :focus{
      border-color: var(--color-negative);

    }
  }

  .buttonCenter{
    margin: 0 auto;
    margin-top: 2rem;
    display: flex;
  }
  
  @keyframes anim-adjust-img {
    0% {
      transform: scale(1) translateY(-0.625rem);
     
    }
    50% {
      transform: scale(1.2) translateY(-0.625rem);
    }
    100% {
      transform: scale(1) translateY(-0.625rem);
    }
    
  }
  @keyframes anim-resize-img {
    0% {
      transform: scale(1.5) translateY(-1.25rem);
      
    }
    50% {
      transform: scale(1.8) translateY(-1.25rem);
    }
    100% {
      transform: scale(1.5) translateY(-1.25rem);
    }
  }
    
  @media only screen and (max-width: 37.5rem) {
    main{
      width: 100%;
      padding: 1rem;
      flex-direction: column;
      text-align: center;
    }
  }

  /* swiper */

 

.swiper-container{
  width: fit-content;
}


.swiper-button-prev::after,.swiper-button-next::after{
  color: white;
}


::-webkit-scrollbar-track { 
  background-color: #fff;
}

::-webkit-scrollbar {
  width: .4375rem;
  height: .4375rem;
}

::-webkit-scrollbar-thumb {
  background: #fff;
  border-radius: var(--border-radius-1);
}
`;
