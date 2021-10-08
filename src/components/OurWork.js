import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Carousel from "react-grid-carousel";
import styled from "styled-components";
import HeadingBorderAnimation from "./HeadingBorderAnimation";

function OurWork(props) {
  return (
    <Wrapper>
      <div className="heading">
        <HeadingBorderAnimation>{props.data.title}</HeadingBorderAnimation>
      </div>

      <div className="our_work_wrapper">
        <Carousel
          cols={3}
          rows={1}
          gap={60}
          responsiveLayout={[
            {
              breakpoint: 1200,
              cols: 3,
            },
            {
              breakpoint: 990,
              cols: 2,
            },
            {
              breakpoint: 479,
              cols: 1,
              gap: 15,
            },
          ]}
        >
          {props.data.our_works.map((d) => (
            <Carousel.Item>
              <div className="our_work" key={d.id}>
                <div className="image_wrapper">
                  <GatsbyImage
                    className="image_wrapper"
                    image={d.media.localFile.childImageSharp.gatsbyImageData}
                    alt=""
                  />
                </div>
                <div className="description">
                  <div className="desc">
                    <p>{d.description}</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Wrapper>
  );
}

export default OurWork;

const Wrapper = styled.div`
  grid-area: auto/2/auto/11;
  width: 100%;

  .our_work_wrapper {
    width: 100%;
    height: auto;
    display: block;
  }

  .image_wrapper {
    display: block;
    .gatsby-image-wrapper {
      width: auto;
      height: 240px;
      border-radius: 6px;
    }
  }
  .heading {
    padding: 10px 0;
  }
  .our_work {
    display: flex;
    flex-direction: column;
    height: auto;
    padding-bottom: 15px;
    .description {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-top: -50px;
      z-index: 1;
      position: relative;
      .desc {
        width: 85%;
        background: var(--greyColor);
        box-shadow: 0px 1.4185px 4.2555px rgba(0, 0, 0, 0.25);
        border-radius: 3.54625px;
        display: flex;
        justify-content: center;
        padding: 10px;
      }
      p {
        text-align: center;
        font-size: 17.02px;
        @media (max-width: 479px) {
          font-size: 14px;
        }
      }
    }
  }
`;
