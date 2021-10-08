import React from "react";
import styled from "styled-components";
import HeadingBorderAnimation from "./HeadingBorderAnimation";
import { GatsbyImage } from "gatsby-plugin-image";
import LinkTo from "./LinkTo";
import ReactMarkdown from "react-markdown";

function LeftImage(props) {
  return (
    <Wrapper>
      <div className="right_image">
        <GatsbyImage
          image={props.data.media.localFile.childImageSharp.gatsbyImageData}
          alt={props.data.title}
        />
      </div>
      <div className="left_description">
        <HeadingBorderAnimation>{props.data.title}</HeadingBorderAnimation>
        <p>{props.desc}</p>
        <ReactMarkdown>{props.data.description}</ReactMarkdown>
        <div style={{ display: "flex", marginTop: "1rem" }}>
          {props.data.button && (
            <LinkTo path={props.data.button.link_or_slug}>
              {props.data.button.label}
            </LinkTo>
          )}{" "}
        </div>
      </div>
    </Wrapper>
  );
}

export default LeftImage;

const Wrapper = styled.div`
  grid-area: auto/2/auto/11;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;

  @media (min-width: 1900px) {
    width: 80%;
  }

  .right_image {
    grid-area: 1/1/2/2;

    display: flex;

    @media (max-width: 767px) {
      grid-area: 1/1/2/3;
    }
    img {
      object-fit: contain;
    }
    .gatsby-image-wrapper {
      width: 100%;
    }
  }
  .left_description {
    grid-area: 1/2/2/3;
    padding-left: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 767px) {
      grid-area: 2/1/3/3;
      padding-left: 0px;
      margin-top: 15px;
    }
    p {
      font-size: 22px;
      font-weight: var(--LightWeight);
      letter-spacing: 0.03em;
      margin: 5px 0;
      @media (max-width: 479px) {
        font-size: 18px;
      }
    }
    ul {
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        font-size: 18px;
        font-weight: var(--NormalWeight);
        padding: 5px 0;
        @media (max-width: 479px) {
          font-size: 16px;
        }
      }
    }
  }
`;
