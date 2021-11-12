import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import HeadingBorderAnimation from "./HeadingBorderAnimation";
import LinkTo from "./LinkTo";
import ReactMarkdown from "react-markdown";

function WhatweDO(props) {
  return (
    <Container>
      <InnerConatiner>
        <HeadingBorderAnimation delay=".2s">{props.data.title}</HeadingBorderAnimation>
        <ReactMarkdown>
         {props.data.description}
        </ReactMarkdown>
        <LinkTo path={props.data.button.link_or_slug} delay=".4s">
            {props.data.button.label}
          </LinkTo>
        
      </InnerConatiner>
    </Container>
  );
}

export default WhatweDO;

const Container = styled.div`
  grid-area: 2/2/3/11;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  height: auto;
`;

const InnerConatiner = styled.div`
  width: 70%;
  display: flex;
  height: auto;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 479px) {
    width: 90%;
  }

  /* h2 {
    font-size: 20px;
    font-weight: 600;
    font-family:"Maven Pro", sans-serif !important;
     
  } */




  h4 {
    font-size: 36px;
    font-weight: var(--LightWeight);
    letter-spacing: 0.05em;
    margin: 10px 0;
    @media (max-width: 479px) {
      font-size: 22px;
      letter-spacing: 1.5px;
      line-height: 25px;
    }
    @media (max-width: 767px) {
      font-size: 22px !important;
      letter-spacing: 1.5px;
      line-height: 25px;
    }
    @media (max-width: 991px) {
      font-size: 18px;
      letter-spacing: 1.5px;
      line-height: 25px;
    }
  }
`;
// const LinkTo = styled(Link)`
//   margin-top: 15px;
//   background-color: white;
//   color: var(--primaryColor);
//   border: 1px solid var(--primaryColor);
//   padding: 18px 24px;

//   border-radius: 6px;
//   transition: transform 0.25s ease, box-shadow 0.25s ease,
//     background-color 0.25s ease;
//   box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
//   text-decoration: none;

//   &:hover {
//     transition-duration: 0.45s;
//     transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
//     background-color: var(--primaryColor);
//     color: #fff;
//   }
// `;
