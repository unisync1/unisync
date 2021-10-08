import React from "react";
import styled from "styled-components";
import VideoBanner from "../components/videoBanner";
import WhatweDO from "../components/WhatWeDo";
import { useStaticQuery, graphql } from "gatsby";

import OurWork from "../components/OurWork";
import TechnologyStackCarousel from "../components/TechnologyStackCarousel";
import WhoWeAre from "../components/WhoareWe";
import WhatWeAreThinking from "../components/Whatweare";
import LeftOrRIght from "../components/LeftOrRIght";

function Index({ data }) {
  const {
    what_we_do,
    technology_stacks,
    our_work,
    grid_left_or_right,
    who_are_we,
    what_we_are,
    news,
    empowering_bottom_section,
    video_banner,
  } = data.strapiHome;

  return (
    <Wrapper>
      <VideoBanner data={video_banner} />
      <WhatweDO data={what_we_do} />
      <LeftOrRIght data={grid_left_or_right} />

      <OurWork data={our_work} />
      <TechnologyStackCarousel data={technology_stacks} />
      <WhoWeAre data={who_are_we} />
      <WhatWeAreThinking
        data={what_we_are}
        news={news}
        bottom={empowering_bottom_section}
      />
    </Wrapper>
  );
}

export default Index;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  grid-row-gap: 150px;
  grid-column-gap: 5px;
  height: auto;
  place-items: center;
`;

export const query = graphql`
  {
    strapiHome {
      what_we_do {
        description
        id
        title
        button {
          label
          link_or_slug
        }
      }
      technology_stacks {
        title
        logos {
          medias {
            url
          }
        }
      }
      our_work {
        title
        our_works {
          description
          id
          media {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
      grid_left_or_right {
        description
        left_image_or_right_image
        id
        title
        media {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        button {
          label
          link_or_slug
        }
      }
      who_are_we {
        anaotherDescription
        id
        description
        left_bottom_imge {
          url
        }
        left_video {
          url
          localFile {
            publicURL
          }
        }
        title
        right_image {
          url
        }
      }
      what_we_are {
        description
        id
        title
        image_with_description {
          description
          id
          media {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
      news {
        id
        title
        news_updates {
          description
          id
          title
        }
      }
      empowering_bottom_section {
        title
        description
      }
      video_banner {
        short_description
        second_title
        first_title
        banner_video {
          localFile {
            publicURL
          }
          url
        }
      }
    }
  }
`;
