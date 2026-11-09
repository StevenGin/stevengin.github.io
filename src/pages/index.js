import React from "react"
import styled from "styled-components"
import Typewriter from "typewriter-effect"
import {
  HeaderLogo,
  HeadingXL,
  HeadingL,
  Layout,
  SEO,
  TextBody,
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
const TimelineEntry = styled.div`
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

export default function Home() {
  return (
    <>
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#d72828" offset="0%" />
          <stop stopColor="#00d4ff" offset="100%" />
        </linearGradient>
      </svg>
      <SEO title="Home" />

      <HeaderLogo />
      <Layout>
        <Hero>
          <TextHome>Hi, I'm</TextHome>
          <HeadingXL>Steven Gin</HeadingXL>

          <TextHome>
            <Typewriter
              options={{
                strings: [
                  "Senior Staff Data Scientist",
                  "Causal Inference & Experimentation",
                  "Forecasting at Meta Scale",
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
                <a href="/steven-gin-resume.pdf">
                  <AiFillFilePdf />
                </a>
              </SocialIcon>
            </SocialIconContainer>
          </SocialIconList>
        </Hero>

        <HeadingL>Career</HeadingL>

        <TimelineEntry>
          <TextBody>
            <b>Senior Staff Data Scientist, WhatsApp Ecosystems, Meta</b>
            <br />
            2024 – Present
            <br />
            Technical lead across WhatsApp Analytics, a 300-person
            organization. Owns WhatsApp-wide experimentation, logging,
            dashboard, and agentic data-access infrastructure.
          </TextBody>
        </TimelineEntry>

        <TimelineEntry>
          <TextBody>
            <b>Data Science Manager, Family Ecosystems, Meta</b>
            <br />
            2022 – 2024
            <br />
            Managed up to 11 data scientists. Head of cross-company
            forecasting, building the framework and infrastructure used
            throughout Meta.
          </TextBody>
        </TimelineEntry>

        <TimelineEntry>
          <TextBody>
            <b>Staff Data Scientist, Facebook Ecosystems, Meta</b>
            <br />
            2019 – 2022
            <br />
            Led Facebook growth forecasting across 12k+ time series, and
            delivered executive analyses on US Elections, Covid impact, and
            Young Adults.
          </TextBody>
        </TimelineEntry>

        <TimelineEntry>
          <TextBody>
            <b>Data Science Analyst, Dialpad</b>
            <br />
            2018 – 2019
            <br />
            Built the company&apos;s data warehouse and pipelines from
            scratch, plus a fraud classifier and an ASR model for company
            name pronunciation.
          </TextBody>
        </TimelineEntry>

        <TimelineEntry>
          <TextBody>
            <b>Logistics / Business Process Analyst, Best Buy</b>
            <br />
            2016 – 2018
            <br />
            Warehouse routing and labor productivity models, driving a 30%
            efficiency gain across the supply chain.
          </TextBody>
        </TimelineEntry>
      </Layout>
    </>
  )
}
