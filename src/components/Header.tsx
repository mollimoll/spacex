import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  background-color: darkslategrey;
  padding: 10px;

  h1 {
    color: white;
    margin: 0;
  }
`

const Header = () => (
  <StyledHeader>
    <h1>SpaceXplore</h1>
  </StyledHeader>
)

export default Header
