import * as React from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import "./letstalk.css"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false, success: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => this.setState({ success: true }))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Wrapper>
        {!this.state.success ? (
          <>
            <div className="left_spacing"></div>
            <div className="main">
              <div className="section_left">
                <h2>Are you ready to take the next step?</h2>
              </div>
              <form
                name="contact"
                method="post"
                action="/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="main_row">
                  <div id="fancy-inputs" className="info">
                    <label className="input">
                      <input
                        type="text"
                        placeholder="Name *"
                        name={"name"}
                        required={true}
                        onChange={this.handleChange}
                      />
                      <span>{/* <span>Name</span> */}</span>
                    </label>
                    <label className="input">
                      <input
                        placeholder="E-mail *"
                        type={"email"}
                        required={true}
                        name="email"
                        onChange={this.handleChange}
                      />
                      <span>{/* <span>E-mail</span> */}</span>
                    </label>
                    <label className="input">
                      <textarea
                        placeholder="Message *"
                        name={"message"}
                        rows="5"
                        required={true}
                        className="form-control"
                        onChange={this.handleChange}
                      ></textarea>
                      <span style={{ height: "100px" }}></span>
                    </label>
                  </div>
                  <div id="fancy-inputs" className="info1">
                    <label className="input">
                      <input
                        type={"phone"}
                        name={"phone"}
                        placeholder="Phone"
                        onChange={this.handleChange}
                      />
                      <span>{/* <span>Phone</span> */}</span>
                    </label>
                    <label className="input">
                      <input
                        type="country"
                        name={"country"}
                        placeholder="Country"
                        onChange={this.handleChange}
                      />
                      <span>{/* <span>Country</span> */}</span>
                    </label>
                    <label className="input">
                      <input
                        type="city"
                        name={"city"}
                        placeholder="City"
                        onChange={this.handleChange}
                      />
                      <span>{/* <span>City</span> */}</span>
                    </label>
                    <div className="button_submit">
                      <button type="submit" className="submit-btn">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="right_spacing"></div>
          </>
        ) : (
          <h1>Form is submitted</h1>
        )}
      </Wrapper>
      // <section className="section">
      //   <div className="container">
      //     <div className="content">
      //       <h1>Contact</h1>
      //       <form
      //         name="contact"
      //         method="post"
      //         action="/contact/thanks/"
      //         data-netlify="true"
      //         data-netlify-honeypot="bot-field"
      //         onSubmit={this.handleSubmit}
      //       >
      //         {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      //         <input type="hidden" name="form-name" value="contact" />
      //         <div hidden>
      //           <label>
      //             Don’t fill this out:{" "}
      //             <input name="bot-field" onChange={this.handleChange} />
      //           </label>
      //         </div>
      //         <div className="field">
      //           <label className="label" htmlFor={"name"}>
      //             Your name
      //           </label>
      //           <div className="control">
      //             <input
      //               className="input"
      //               type={"text"}
      //               name={"name"}
      //               onChange={this.handleChange}
      //               id={"name"}
      //               required={true}
      //             />
      //           </div>
      //         </div>
      //         <div className="field">
      //           <label className="label" htmlFor={"email"}>
      //             Email
      //           </label>
      //           <div className="control">
      //             <input
      //               className="input"
      //               type={"email"}
      //               name={"email"}
      //               onChange={this.handleChange}
      //               id={"email"}
      //               required={true}
      //             />
      //           </div>
      //         </div>
      //         <div className="field">
      //           <label className="label" htmlFor={"message"}>
      //             Message
      //           </label>
      //           <div className="control">
      //             <textarea
      //               className="textarea"
      //               name={"message"}
      //               onChange={this.handleChange}
      //               id={"message"}
      //               required={true}
      //             />
      //           </div>
      //         </div>
      //         <div className="field">
      //           <button className="button is-link" type="submit">
      //             Send
      //           </button>
      //         </div>
      //       </form>
      //     </div>
      //   </div>
      // </section>
    );
  }
}
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
