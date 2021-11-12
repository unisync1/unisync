import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./letstalk.css";
import { navigate } from "gatsby";

function LetsTalk(props) {
  return (
    <Wrapper>
      <form
        name="contact"
        action="/"
        method="POST"
        netlify
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />

        <input type="text" name="name" placeholder="name" required />
        <input type="email" name="email" placeholder="email" required />
        <textarea
          name="message"
          placeholder="Message"
          cols="30"
          rows="10"
          required
        ></textarea>
        <button type="submit">send a message</button>
      </form>
    </Wrapper>
  );
}

export default LetsTalk;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: row wrap;
  .left_spacing {
    width: 6%;
  }
  h2 {
    color: white !important;
  }
  .form {
    width: 88%;
    display: flex;
    justify-content: center;
  }
  .main {
    width: 88%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .section_left {
    width: 100%;
    text-align: center;
  }
  .right_spacing {
    width: 6%;
  }
  .main_section {
    display: flex;
    flex-flow: row wrap;
  }
  .main_row {
    display: flex;
  }
  .information {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    grid-area: 1/2/2/5;
  }
  .info1 {
    display: flex;
    flex-direction: column;
    grid-area: 1/7/2/9;
    align-items: flex-end;
    @media (max-width: 767px) {
      margin-top: 50px;
    }
  }
  @media (max-width: 767px) {
    .info {
      grid-area: 2/2/3/9;
      display: flex;
      align-items: center;
    }
    .main_row {
      display: flex;
      flex-flow: column;
    }
    .info1 {
      grid-area: 3/2/4/9;
      display: flex;
      align-items: center;
    }
    .button_submit {
      grid-area: 5/5/6/7 !important;
    }
  }
  @media (max-width: 479px) {
    .left_spacing {
      width: 0px;
    }
    .right_spacing {
      width: 0px;
    }
    .main {
      width: 100%;
    }
    .main_row {
      display: flex;
      flex-flow: column;
    }
    .info {
      grid-area: 2/2/3/10;
      display: flex;
      align-items: center;
    }
    .info1 {
      grid-area: 3/2/4/10;
      display: flex;
      align-items: center;
    }
  }
  .button_submit {
    grid-area: 2/5/3/7;
    display: flex;
    width: 100%;
    margin-top: 35px;
    justify-content: center;
    @media (max-width: 479px) {
      margin-top: 20px !important;
    }
    @media (max-width: 767px) {
      margin-top: 20px !important;
    }
  }
  button {
    float: right;
    padding: 0px;
    padding: 10px 15px;
    margin: 20px 0 0;
    font-family: "Montserrat", sans-serif !important;
    background: var(--thirdColor);
    color: var(--secondaryColor);
    cursor: pointer;
    transition: all 0.3s;
    width: auto;
    border-radius: 6px;
    margin-bottom: 50px;
    font-size: 20px;
    border: 0px;
  }
  button:hover {
    background: var(--purpleColor);
    color: #f1f1f1;
  }
  #fancy-inputs {
    float: left;
    width: 100%;
    margin: 0 0 50px 0;
    padding: 0 20px;
    label.input {
      float: left;
      width: 250px;
      height: 42px;
      margin: 50px 0 0 0;
      position: relative;
      clear: both;
      span {
        width: 100%;
        height: 40px;
        line-height: 40px;
        position: absolute;
        left: 0;
        cursor: text;
        span {
          position: absolute;
          top: 0;
          z-index: 1;
          /* font-family: "Indie Flower", cursive; */
          font-size: 22px;
          color: #ffffff;
          text-indent: 10px;
          transition: 0.3s;
          -webkit-transition: 0.3s;
          -moz-transition: 0.3s;
        }
        &:before {
          content: "";
          width: 0%;
          height: 3px;
          background-color: #2c3e50;
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 99;
          transition: 0.3s;
          -webkit-transition: 0.3s;
          -moz-transition: 0.3s;
        }
        &:after {
          content: "";
          width: 0%;
          height: 3px;
          background-color: #2c3e50;
          position: absolute;
          bottom: 0;
          right: 0;
          z-index: 99;
          transition: 0.3s;
          -webkit-transition: 0.3s;
          -moz-transition: 0.3s;
        }
      }
      @media (max-width: 479px) {
        width: auto;
      }
    }
    input,
    .form-control {
      float: left;
      width: 250px;
      height: 40px;
      padding: 0 0px;
      border: 0;
      border-bottom: 3px solid #fff;
      background-color: transparent;
      color: #ffffff;
      font-size: 16px;
      position: relative;
      z-index: 99;
      &:focus {
        outline: 0;
      }
      .white {
        background-color: var(--primaryColor);
      }
      @media (max-width: 479px) {
        width: auto;
      }
    }
    .form-control:focus + span {
      height: 100px;
      span {
        height: 100px;
        cursor: initial;
        position: absolute;
        top: -35px;
        color: #2c3e50;
      }
      &:before {
        width: 50%;
      }
      &:after {
        width: 50%;
      }
    }
    .form-control,
    span {
      height: 100px;
    }
    input:focus + span {
      span {
        height: 100px;
        cursor: initial;
        position: absolute;
        top: -35px;
        color: #2c3e50;
      }
      &:before {
        width: 50%;
      }
      &:after {
        width: 50%;
      }
    }
    span.fixed {
      span {
        top: -35px;
      }
    }
  }
`;
