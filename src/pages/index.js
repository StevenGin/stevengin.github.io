import React from "react"
import {Link, graphql} from "gatsby"
import styled from "styled-components"
import Typewriter from "typewriter-effect"
import {
  HeaderLogo,
  HeadingXL,
  HeadingL,
  Layout,
  SEO,
  TextBody,
  TextDate,
  SocialIcon,
} from "../components"
import {BREAKPOINT} from "../utils/constants"
import {SiGithub} from "@react-icons/all-files/si/SiGithub"
import {SiLinkedin} from "@react-icons/all-files/si/SiLinkedin"

import {AiFillFilePdf} from "@react-icons/all-files/ai/AiFillFilePdf"

const Hero = styled.div`
  margin-bottom: 20vh;

  @media (max-width: ${BREAKPOINT}px) {
    margin-bottom: 0;
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
const Post = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 50px;

  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 0;
  }
`
const SocialIconList = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style: none;
  margin: 0 auto;
  max-width: 12em;
  padding: 1em 0;
`
const SocialIconContainer = styled.li`
  width: 2em;
  height: 2em;
`

export default function Home({data}) {
  return (
    <>
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#d72828" offset="0%" />
          <stop stopColor="#00d4ff" offset="100%" />
        </linearGradient>
      </svg>
      <SEO title="Blog" />

      <HeaderLogo />
      <Layout>
        <Hero>
          <TextHome>Hi, I'm</TextHome>
          <HeadingXL>Steven Gin</HeadingXL>

          <TextHome>
            <Typewriter
              options={{
                strings: [
                  "Data Scientist",
                  "Forecasting Expert",
                  "Machine Learning Engineer",
                  "Indie Video Game Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 100,
              }}
            />
          </TextHome>
          <SocialIconList>
            <SocialIconContainer>
              <SocialIcon>
                <a href="https://github.com/StevenGin">
                  <SiGithub />
                </a>
              </SocialIcon>
            </SocialIconContainer>
            <SocialIconContainer>
              <SocialIcon>
                <a href="https://www.linkedin.com/in/stevengin/">
                  <SiLinkedin />
                </a>
              </SocialIcon>
            </SocialIconContainer>
            <SocialIconContainer>
              <SocialIcon>
                <a href="https://docs.google.com/document/d/18BU1a9Lfj6sCh8ZM-ybdlIn_Dd11zdrOkD6749sojw4/edit?usp=sharing">
                  <AiFillFilePdf />
                </a>
              </SocialIcon>
            </SocialIconContainer>
          </SocialIconList>
        </Hero>

        {data.allMarkdownRemark.edges.map(({node}) => (
          <Link to={node.fields.slug} key={node.id}>
            <Post>
              <HeadingL>{node.frontmatter.title}</HeadingL>
              <TextBody>{node.excerpt}</TextBody>
              <TextDate>{node.frontmatter.date}</TextDate>
            </Post>
          </Link>
        ))}
      </Layout>
    </>
  )
}

export const data = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
