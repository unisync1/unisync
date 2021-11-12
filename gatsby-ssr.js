import React from "react";
import Layout from "./src/components/layout";
import "@fontsource/lato";

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <div key="netlify_form" id="netlify__form">
      <form
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
      >
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>
    </div>,
  ]);
};

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
