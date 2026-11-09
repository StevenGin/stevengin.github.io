import React from "react"
import styled from "styled-components"
import Typewriter from "typewriter-effect"
import {
  Button,
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
import {ExperimentChart} from "../components/ExperimentChart"
import {CokeCounter, GuitarStringsCounter} from "../components/CokeCounter"

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
const Timeline = styled.div`
  border-left: 2px solid lightgray;
  margin-left: 6px;
  padding-left: 32px;

  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 24px;
  }
`
const TimelineEntry = styled.div`
  margin-bottom: 50px;
  position: relative;

  &::before {
    background-color: var(--accent-color);
    border: 3px solid var(--light-color);
    border-radius: 50%;
    content: "";
    height: 20px;
    left: -33px;
    position: absolute;
    top: 6px;
    transform: translateX(-50%);
    width: 20px;
  }

  @media (max-width: ${BREAKPOINT}px) {
    &::before {
      left: -25px;
    }
  }
`
const TimelineDate = styled.p`
  color: var(--accent-color);
  font-weight: 700;
  margin: 0 0 8px 0;
`
const ProjectList = styled.ul`
  && {
    list-style: disc;
  }
  margin: 12px 0 0 0;
  padding-left: 1.2em;
`
const ProjectItem = styled.li`
  margin-bottom: 6px;
`
const KpiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 5vh;

  @media (max-width: ${BREAKPOINT}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const KpiCard = styled.div`
  border: 1px solid lightgray;
  border-top: 3px solid var(--accent-color);
  padding: 20px 16px;
`
const KpiValue = styled.p`
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -1px;
  margin: 0 0 8px 0;
`
const KpiLabel = styled.p`
  color: var(--dark-color-lighter);
  font-size: 14px;
  line-height: 1.4;
  margin: 0;
`
const ChartCard = styled.div`
  border: 1px solid lightgray;
  margin-bottom: 12px;
  padding: 20px 8px 8px;
`
const ChartTitle = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 16px 0;
`
const ChartCaption = styled.p`
  color: var(--dark-color-lighter);
  font-size: 14px;
  margin: 0;
`
const CounterCard = styled.div`
  align-items: center;
  border: 1px solid lightgray;
  border-top: 3px solid #00d4ff;
  display: flex;
  gap: 24px;
  padding: 20px 16px;
`
const SillyGrid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 5vh;

  @media (max-width: ${BREAKPOINT}px) {
    grid-template-columns: 1fr;
  }
`
const CounterValue = styled.p`
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -1px;
  margin: 0;
`
const CounterLabel = styled.p`
  font-weight: 700;
  margin: 0 0 4px 0;
`
const CounterNote = styled.p`
  color: var(--dark-color-lighter);
  font-size: 14px;
  margin: 0;
`
const RoleStats = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`
const RoleStat = styled.div`
  border: 1px solid lightgray;
  border-top: 3px solid var(--accent-color);
  padding: 12px 16px;
`
const RoleStatValue = styled.p`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -1px;
  margin: 0 0 4px 0;
`
const RoleStatLabel = styled.p`
  color: var(--dark-color-lighter);
  font-size: 13px;
  line-height: 1.4;
  margin: 0;
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

        <HeadingL>By the numbers</HeadingL>

        <KpiGrid>
          <KpiCard>
            <KpiValue>25,000</KpiValue>
            <KpiLabel>
              tests per year at WhatsApp (2026, projected)
            </KpiLabel>
          </KpiCard>
          <KpiCard>
            <KpiValue>300</KpiValue>
            <KpiLabel>people in WhatsApp Analytics</KpiLabel>
          </KpiCard>
          <KpiCard>
            <KpiValue>12k+</KpiValue>
            <KpiLabel>
              time series in Meta&apos;s largest forecasting infrastructure
            </KpiLabel>
          </KpiCard>
          <KpiCard>
            <KpiValue>30%</KpiValue>
            <KpiLabel>
              warehouse routing efficiency gain, Best Buy
            </KpiLabel>
          </KpiCard>
        </KpiGrid>

        <SillyGrid>
          <CounterCard>
            <CounterValue>
              <CokeCounter />
            </CounterValue>
            <div>
              <CounterLabel>Coke Zeros consumed</CounterLabel>
              <CounterNote>
                live count — one every 3 seconds, extremely scientific
              </CounterNote>
            </div>
          </CounterCard>
          <CounterCard>
            <CounterValue>
              <GuitarStringsCounter />
            </CounterValue>
            <div>
              <CounterLabel>Guitar strings replaced</CounterLabel>
              <CounterNote>
                live count — one every 30 seconds, also extremely
                scientific
              </CounterNote>
            </div>
          </CounterCard>
        </SillyGrid>

        <HeadingL>Career</HeadingL>

        <Timeline>
          <TimelineEntry>
            <TextBody>
              <b>Senior Staff Data Scientist, WhatsApp Ecosystems, Meta</b>
              <TimelineDate>2024 – Present</TimelineDate>
              Technical lead across WhatsApp Analytics, a 300-person
              organization. Owns WhatsApp-wide experimentation, logging,
              dashboard, and agentic data-access infrastructure.
              <ProjectList>
                <ProjectItem>
                  <b>Experimentation at scale</b> — grew WhatsApp testing
                  from 11,000 to a projected 25,000 tests a year.
                </ProjectItem>
                <ProjectItem>
                  <b>Jurisdiction model</b> — ML predicts a user&apos;s
                  country of residence, replacing phone-number logic.
                </ProjectItem>
                <ProjectItem>
                  <b>AI for Analytics</b> — standardizing tooling, evals,
                  semantic models, and an experimentation agent.
                </ProjectItem>
              </ProjectList>
              <ChartTitle>
                WhatsApp experimentation, tests per year
              </ChartTitle>
              <ChartCard>
                <ExperimentChart />
              </ChartCard>
              <ChartCaption>*2026 projected.</ChartCaption>
            </TextBody>
          </TimelineEntry>

          <TimelineEntry>
            <TextBody>
              <b>Data Science Manager, Family Ecosystems, Meta</b>
              <TimelineDate>2022 – 2024</TimelineDate>
              Managed up to 11 data scientists. Head of cross-company
              forecasting, building the framework and infrastructure used
              throughout Meta.
              <ProjectList>
                <ProjectItem>
                  <b>Cross-company forecasting</b> — the forecasting
                  framework and infrastructure used throughout Meta.
                </ProjectItem>
                <ProjectItem>
                  <b>Common Analytics</b> — standardized code reuse across
                  data science, saving hundreds of hours of DS time.
                </ProjectItem>
              </ProjectList>
              <RoleStats>
                <RoleStat>
                  <RoleStatValue>11</RoleStatValue>
                  <RoleStatLabel>data scientists managed</RoleStatLabel>
                </RoleStat>
              </RoleStats>
            </TextBody>
          </TimelineEntry>

          <TimelineEntry>
            <TextBody>
              <b>Staff Data Scientist, Facebook Ecosystems, Meta</b>
              <TimelineDate>2019 – 2022</TimelineDate>
              Led Facebook growth forecasting across 12k+ time series, and
              delivered executive analyses on US Elections, Covid impact, and
              Young Adults.
              <ProjectList>
                <ProjectItem>
                  <b>Growth forecasting</b> — overhauled FB forecasting;
                  12k+ time series, the largest forecasting infrastructure
                  at Meta.
                </ProjectItem>
                <ProjectItem>
                  <b>Uplift &amp; churn</b> — prediction model behind SMB ads
                  and Facebook notifications.
                </ProjectItem>
                <ProjectItem>
                  <b>Executive analyses</b> — US Elections, Covid impact,
                  and Young Adults, steering product strategy and policy.
                </ProjectItem>
              </ProjectList>
              <RoleStats>
                <RoleStat>
                  <RoleStatValue>12k+</RoleStatValue>
                  <RoleStatLabel>time series forecast</RoleStatLabel>
                </RoleStat>
              </RoleStats>
            </TextBody>
          </TimelineEntry>

          <TimelineEntry>
            <TextBody>
              <b>Data Science Analyst, Dialpad</b>
              <TimelineDate>2018 – 2019</TimelineDate>
              Built the company&apos;s data warehouse and pipelines from
              scratch, plus a fraud classifier and an ASR model for company
              name pronunciation.
              <ProjectList>
                <ProjectItem>
                  <b>Data warehouse</b> — built from scratch, powering core
                  business analytics.
                </ProjectItem>
                <ProjectItem>
                  <b>Fraud classifier</b> — isolation forest, fully
                  automating manual fraud review.
                </ProjectItem>
                <ProjectItem>
                  <b>ASR model</b> — speech recognition for company name
                  pronunciation.
                </ProjectItem>
              </ProjectList>
              <RoleStats>
                <RoleStat>
                  <RoleStatValue>3</RoleStatValue>
                  <RoleStatLabel>core systems built</RoleStatLabel>
                </RoleStat>
              </RoleStats>
            </TextBody>
          </TimelineEntry>

          <TimelineEntry>
            <TextBody>
              <b>Logistics / Business Process Analyst, Best Buy</b>
              <TimelineDate>2016 – 2018</TimelineDate>
              Warehouse routing and labor productivity models, driving a 30%
              efficiency gain across the supply chain.
              <ProjectList>
                <ProjectItem>
                  <b>Warehouse routing</b> — 30% efficiency gain across the
                  supply chain.
                </ProjectItem>
                <ProjectItem>
                  <b>Capacity models</b> — throughput and allocation across
                  the national logistics network.
                </ProjectItem>
              </ProjectList>
              <RoleStats>
                <RoleStat>
                  <RoleStatValue>30%</RoleStatValue>
                  <RoleStatLabel>routing efficiency gain</RoleStatLabel>
                </RoleStat>
              </RoleStats>
            </TextBody>
          </TimelineEntry>

          <TimelineEntry>
            <TextBody>
              <b>Side projects</b>
              <TimelineDate>Ongoing</TimelineDate>
              Indie games in Unity, in development — <b>Popstar</b>, a
              pop-group management game, and <b>Aboard the Astra 2</b>, a
              co-op roguelike.
            </TextBody>
          </TimelineEntry>
        </Timeline>

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
        <Timeline>
          <TimelineEntry>
            <TextBody>
              <b>M.A. Economics, University of Ottawa</b>
              <TimelineDate>2014 – 2016</TimelineDate>
            </TextBody>
          </TimelineEntry>
          <TimelineEntry>
            <TextBody>
              <b>
                B.A. (Honours) Economics and Linguistics, University of
                Manitoba
              </b>
              <TimelineDate>2010 – 2014</TimelineDate>
            </TextBody>
          </TimelineEntry>
        </Timeline>

        <Button href="mailto:verdananew&#64;gmail.com">Get in touch</Button>
      </Layout>
    </>
  )
}
