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
import {BREAKPOINT} from "../utils/constants"
import styled from "styled-components"

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
          I&apos;m a Senior Staff Data Scientist at Meta and the technical lead
          across WhatsApp Analytics, a 300-person organization. I chair the
          senior IC forum, lead AI for Analytics, and own WhatsApp-wide
          experimentation, logging, dashboard, and agentic data-access
          infrastructure. I regularly present to WhatsApp C-suite leadership.
          <br />
          <br />
          My work is causal inference and experimentation applied to growth,
          competition, and forecasting decisions at Meta scale — most recently
          scaling WhatsApp experimentation from 11,000 tests a year to a
          projected 25,000.
          <br />
          <br />
          In my spare time, I play guitar and make video games.
        </TextBody>

        <HeadingL>Experience</HeadingL>
        <TextBody>
          <b>Senior Staff Data Scientist, WhatsApp Ecosystems, Meta</b>
          <br />
          2024 – Present
          <br />
          <br />
          <b>Data Science Manager, Family Ecosystems, Meta</b>
          <br />
          2022 – 2024
          <br />
          <br />
          <b>Staff Data Scientist, Facebook Ecosystems, Meta</b>
          <br />
          2019 – 2022
          <br />
          <br />
          <b>Data Science Analyst, Dialpad</b>
          <br />
          2018 – 2019
          <br />
          <br />
          <b>Logistics / Business Process Analyst, Best Buy</b>
          <br />
          2016 – 2018
        </TextBody>

        <HeadingL>Publications</HeadingL>
        <TextBody>
          <a
            href="https://medium.com/@AnalyticsAtMeta/forecasting-meta-balancing-art-and-science-92526e1ae36c"
            target="_blank"
            rel="noopener noreferrer"
          >
            Forecasting@Meta: Balancing Art and Science
          </a>
          , with Kevin Birnbaum, Analytics at Meta, May 2024.
        </TextBody>

        <HeadingL>Education</HeadingL>
        <TextBody>
          <b>M.A. Economics, University of Ottawa</b>
          <br />
          2014 – 2016
          <br />
          <br />
          <b>
            B.A. (Honours) Economics and Linguistics, University of Manitoba
          </b>
          <br />
          2010 – 2014
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
