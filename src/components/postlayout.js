import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Navigation from "./navigation"
import Container from "./container"

const StyledPillar = styled.section`
  background: linear-gradient(
    68.9deg,
    rgba(144, 60, 240, 1) 46.3%,
    rgba(235, 88, 84, 1) 94.8%
  );
  background-size: 500% 500%;
  animation: AnimateBGGradient 10s ease infinite;
  height: 60px;
  width: 100%;

  @media (min-width: 1024px) {
    min-height: 100vh;
    height: 100%;

    h1,
    .desktop-menu {
      display: none;
    }
  }
`

const Pillar = () => {
  return (
    <StyledPillar>
      <Navigation />
    </StyledPillar>
  )
}

const StyledPostLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100%;
  height: 100%;

  p {
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .main-body-content {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    margin-bottom: 4rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 10px 1fr;

    h1 {
      font-size: 4rem;
      line-height: 1.4;
    }

    h2 {
      font-size: 1.2rem;
    }

    .main-body-content {
      margin-top: 4rem;
    }
  }
`

const PostLayout = ({ children }) => {
  return (
    <StyledPostLayout>
      <Pillar />
      <main className="main-body-content">
        <Container>{children}</Container>
      </main>
    </StyledPostLayout>
  )
}

PostLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PostLayout
