import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "../components/Seo/seo";
import GlobalStyles from "../styles/GlobalStyles";
import TypographyStyles from "../styles/TypographyStyles";
import Logo from "../images/uni white.svg";
import '../styles/animate.css'


const Layout = ({ children }) => {

 
  return (
    <>
      <SEO />
      <GlobalStyles />
      <TypographyStyles />
      <Navbar Logo={Logo} />
      <div className="layout">{children}</div>
      <Footer Logo={Logo} />
    </>
  );
};

export default Layout;
