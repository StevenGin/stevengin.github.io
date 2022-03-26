import styled from "styled-components"
import {BREAKPOINT} from "../utils/constants"

export const SocialIcon = styled.div`
  font-size: 40px;
  letter-spacing: -1.5px;
  line-height: 1.2;
  margin-bottom: 2.5vh;
  text-align: center;
  svg {
    fill: black;
    opacity: 80%;
  }
  &:hover {
    svg {
      fill: url(#blue-gradient);
      opacity: 100%;
      transform: scale(1.1);

    }
  }
`
