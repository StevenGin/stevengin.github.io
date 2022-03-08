import styled from "styled-components"
import {BREAKPOINT} from "../utils/constants"

export const HeadingXL = styled.h1`
  background: linear-gradient(90deg, rgba(215,40,40,1) 0%, rgba(167,118,245,1) 63%, rgba(0,212,255,1) 100%);
  display: block;
  font-size: 80px;
  letter-spacing: -4px;
  line-height: 1.2;
  margin: 0 auto 10vh auto;
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 45px;
  }
`
