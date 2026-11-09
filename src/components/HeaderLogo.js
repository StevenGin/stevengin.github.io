import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {FixedBar} from "../components"
import {BREAKPOINT} from "../utils/constants"

const HeaderWrapper = styled(FixedBar)`
  justify-content: space-between;
`

const Logo = styled.p`
  font-size: 32px;
  font-weight: 700;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 28px;
  }
`

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2em;
`

export function HeaderLogo() {
  return (
    <HeaderWrapper>
      <Logo>SG</Logo>
      <NavLinks>
        <Link to="/blog">
          <p>Blog</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
      </NavLinks>
    </HeaderWrapper>
  )
}
