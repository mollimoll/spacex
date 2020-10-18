import React from "react"
import styled from "styled-components"
import { COLOR } from "../constants"

const StyledFooter = styled.footer`
  background-color: ${COLOR.BLACK.DARK};
  padding: 1rem;

  p {
    color: ${COLOR.WHITE};
    margin: 0;
  }
`

const Footer = () => (
  <StyledFooter>
    <p>Made by Molly Boyle | 2020</p>
  </StyledFooter>
)

export default Footer
