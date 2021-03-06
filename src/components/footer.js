import React from "react"
import styled from "styled-components"

import Container from "./container"

const StyledFooter = styled.footer`
  margin-top: 3rem;
  background: linear-gradient(
    -68.9deg,
    rgba(144, 60, 240, 1) 46.3%,
    rgba(235, 88, 84, 1) 94.8%
  );
  background-size: 500% 500%;
  animation: AnimateBGGradient 10s ease infinite;
  border-top: 4px solid black;

  .container {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  p {
    color: white;
    text-align: right;
    font-size: 1.2rem;
    font-weight: 100;
    margin-bottom: 0 !important;
  }

  a {
    color: white;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <p>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a
            href="https://www.gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
        </p>
      </Container>
    </StyledFooter>
  )
}

export default Footer
