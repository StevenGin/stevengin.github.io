import React from "react"
import {graphql} from "gatsby"
import {
  Button,
  HeaderBack,
  HeadingL,
  HeadingXL,
  Image,
  Layout,
  SEO,
  TextBody,
} from "../components"
import App from "../components/piechart"
import {BREAKPOINT} from "../utils/constants"
import styled from "styled-components"

const Graph = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 50px;

  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 0;
  }
`

const TextHome = styled.p`
  color: var(--dark-color-light);
  display: block;
  font-size: 22px;
  line-height: 1.6;
  margin-bottom: 10vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 28em;
  text-align: center;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 19px;
    margin-bottom: 7vh;
  }
`


export default function About({data}) {
  return (
    <>
      <SEO title="About" />
      <HeaderBack />
      <Layout>
        <HeadingXL>About</HeadingXL>
        <Image fluid={data.RandomPhoto.childImageSharp.fluid} />
        <TextBody>
          Passionate about combining technical solutions with business problems.
          <br />
          <br />
          In my spare time, I play guitar and make video games.
        </TextBody>
        <HeadingL>Languages</HeadingL>
        <TextBody>
          My relative language proficiencies. <br />
          <b>Note</b>: Pie Charts are mostly bad but they look good.
        </TextBody>

        <Graph>
          <App />
        </Graph>
        <Button href="mailto:verdananew&#64;gmail.com">Get in touch</Button>
      </Layout>
    </>
  )
}

export const data = graphql`
  query {
    RandomPhoto: file(relativePath: {eq: "assets/images/RandomPhoto.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
