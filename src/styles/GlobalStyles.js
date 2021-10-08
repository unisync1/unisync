import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
:root {
    --family: "Lato" !important;
    --HeavyWeight: 900;
    --LightWeight: 300;
    --NormalWeight: 600;
    --MediumWeight: 400;
    --transMed: 0.3s;
    --transSlow: 0.5s;
    --black: #111111;
    --charcoal: #3e3e3e;
    --primaryColor: #3A7BD5;
    --redColor: #ff002b;
    --greyColor: #f8f8f8;
    --headerColor: #0511F2;
    --h1: 2rem;
    --h2: 1.8rem;
    --h3: 1.5rem;
    --h4: 1.25rem;
    --h5: 1.15rem;
    --h6: 1rem;
    --footerMenuItem: 0.85rem;
    --para: 1rem;
    --spacing: 1rem;

    @media (min-width: 768px) {
      --h1: 2.6rem;
      --h2: 2.4rem;
      --h3: 1.75rem;
      --h4: 1.5rem;
      --h5: 1.25rem;
      --h6: 1.1rem;
      --footerMenuItem: 1rem;
      --para: 1.1rem;
    }

    @media (min-width: 1200px) {
      --h1: 3rem;
      --h2: 2.8rem;
      --h3: 2rem;
      --h4: 1.75rem;
      --h5: 1.35rem;
      --para: 1.15rem;
    }
  }

* {
    box-sizing: border-box;
}

body {
  font-family: "Lato" !important;
  margin: 0;
  padding:0;
}


  
`
export default GlobalStyles
