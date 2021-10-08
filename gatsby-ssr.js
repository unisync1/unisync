import React from "react";
import Layout from "./src/components/layout";
import "@fontsource/lato";




export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
