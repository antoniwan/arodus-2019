import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactMe from "../components/contactme"
import profilepicture from "../images/profile-picture.jpg"

const StyledAbout = styled.div`
  img {
    height: 300px;
    object-fit: cover;
    margin-bottom: 2rem;
  }

  @media (min-width: 1024px) {
    img {
      height: 400px;
      object-position: center center;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledAbout>
      <figure className="full-width">
        <img
          src={profilepicture}
          alt="Antonio Rodriguez looking at the camera"
        />
      </figure>
      <h2>Software Engineer. Accidental Cofounder. Manager. Mentor.</h2>
      <p>
        I lead software engineering and innovation for a{" "}
        <a
          href="https://m8agency.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          marketing agency
        </a>{" "}
        in Miami, Florida. Away from screens, I love playing{" "}
        <a
          href="https://www.instagram.com/stories/highlights/17908582195073038/"
          target="_blank"
          rel="noopener noreferrer"
        >
          guitar
        </a>
        , eating and making tasty food, and spending time at home with my
        family.
      </p>
      <ContactMe />
    </StyledAbout>
  </Layout>
)

export default IndexPage
