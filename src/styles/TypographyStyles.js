import { createGlobalStyle } from "styled-components";

const TypographyStyles = createGlobalStyle`

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: var(--NormalWeight);
    line-height: 1.4;
     font-family:var(--family);
  }

  h2{
    font-size: 18px;
    font-family:var(--family);
    font-weight: var(--NormalWeight);
    letter-spacing: 1px;
  }

  h1 {
    font-size: 22px;
    font-family:var(--family);
    font-weight: 600;
    letter-spacing: 1px;

    @media (min-width: 768px) {
      font-size: 1.6rem;
      line-height: 1.3;
    }

    @media (min-width: 1080px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    font-family:var(--family);
  
  }

  p {
    font-size: 1rem;
    line-height: 1.45;
    margin: 1rem 0;
    font-family:var(--family) !important;
    @media (min-width: 768px) {
      font-size: 1.1rem;
    }

    @media (min-width: 1080px) {
      font-size: 1.2rem;
      line-height: 1.4;
    }
  }
ul, li{
  font-family:var(--family);
}
  
`;
export default TypographyStyles;
