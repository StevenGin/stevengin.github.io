import React from "react"
import {graphql} from "gatsby"
import {
  Button,
  HeaderBack,
  HeadingXL,
  Image,
  Layout,
  SEO,
  TextBody,
} from "../components"

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
