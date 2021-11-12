import React from "react";
import styled from "styled-components";
import CustomizedAccordions from "./CustomAccordion";
import HeadingBorderAnimation from "./HeadingBorderAnimation";

function News(props) {
  return (
    <Wrapper>
      <HeadingBorderAnimation>{props.news.title}</HeadingBorderAnimation>
      <div className="accordion">
        <CustomizedAccordions news={props.news} />
      </div>
    </Wrapper>
  );
}

export default News;

const Wrapper = styled.div`
  @media (max-width: 479px) {
    margin-top: 50px;
  }
  h3 {
    margin: 0;
    font-size: 16px !important;
    font-weight: var(--NormalWeight) !important;
    color: #fff;
  }
  h4 {
    margin: 0;
    font-weight: var(--LightWeight) !important;
    font-size: 13px !important;
    color: #fff;
  }
  p{
    margin: 0;
    font-weight: var(--LightWeight) !important;
    color: #fff;
  }
  .accordion {
    margin-top: 21px;
  }
  .MuiAccordion-root.Mui-expanded {
    margin-bottom: 15px;
  }
  .MuiPaper-root {
    background-color: transparent !important;
  }
  img{
    width: 100%;
  }
  .MuiAccordionDetails-root{
    display: flex;
    flex-direction: column !important;
  }
`;
