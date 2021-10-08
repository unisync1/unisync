import React from 'react'
import styled from 'styled-components';
import Banner from "../components/Banner"
import { graphql } from "gatsby"

function index({data}) {
    const {banner} = data.strapiWhatWeDo
    return (
        <Wrapper>
            <Banner data={banner} linkTitle="Back To Home" link="/" />
        </Wrapper>
    )
}

export default index


const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  grid-row-gap: 100px;
  grid-column-gap: 5px;
  height: auto;
  place-items: center;
`;

export const query = graphql`
  {
    strapiWhatWeDo {
      banner {
        description
        title
        banner_media {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`