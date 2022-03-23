import styled from "styled-components"
import {BREAKPOINT} from "../utils/constants"

export const SocialIcon = styled.h2`
  display: block;
  font-size: 40px;
  letter-spacing: -1.5px;
  line-height: 1.2;
  margin-bottom: 2.5vh;
  text-align: center;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 30px;
  }
`
