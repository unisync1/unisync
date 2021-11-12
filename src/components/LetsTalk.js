import React, { Component } from "react";
import styled from "styled-components";
import { navigate } from "gatsby";

export default class LetsTalk extends Component {
  constructor(props) {
    super(props);
    this.ContactForm = React.createRef();
    this.state = {
      name: "",
      email: "",
    };
  }

  encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const form = this.ContactForm.current;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate("/"))
      .catch((error) => alert(error));

    this.setState({
      name: "",
      email: "",
    });
  };

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit} netlify>
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" ref={this.ContactForm} />
          <input type="email" name="email" ref={this.ContactForm} />
          <button type="submit">submit</button>
        </form>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
