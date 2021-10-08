import React from "react";
import Layout from "./src/components/layout";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";



export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
