import React from "react"
import styled from "styled-components"
import { COLOR } from "../constants"

const StyledHeader = styled.header`
  background-color: ${COLOR.BLACK.DARK};
  padding: 1rem;
  text-align: center;

  h1 {
    color: ${COLOR.WHITE};
    margin: 0;
  }
`

const Header = () => (
  <StyledHeader>
    <h1>SpaceXplore</h1>
  </StyledHeader>
)

export default Header
