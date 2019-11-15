import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledBlog = styled.div`
  ul {
    li {
      font-size: 2rem;
    }
  }
`

const StyledBlogItem = styled.div`
  display: flex;
  flex-direction: column;
  a {
    letter-spacing: -0.2px;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 1.4rem;
    opacity: 0.6;
  }
`

const BlogPage = () => (
  <Layout>
    <SEO title="Creative writing by Antonio Rodriguez." />
    <StyledBlog>
      <h2>Blog</h2>
      <p style={{ marginBottom: "4rem" }}> </p>
      <ul>
        <li>
          <StyledBlogItem>
            <Link to="/posts/the-miracle">The Miracle</Link>
            <span>November 15, 2019</span>
          </StyledBlogItem>
        </li>
      </ul>
    </StyledBlog>
  </Layout>
)

export default BlogPage
