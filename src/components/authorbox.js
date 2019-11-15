import React from "react"
import styled from "styled-components"
import AuthorImage from "../images/picture-flowers.jpg"

const StyledAuthorBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-pink);

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50px;
    border: 0.5px solid var(--color-black);
    margin-right: 1.5rem;
  }

  .post-info {
    display: flex;
    flex-direction: column;
  }

  .author-name {
    font-size: 1.6rem;
    line-height: 1.4;
    margin-bottom: 0.4rem;
    font-weight: bold;
  }

  .post-date,
  .post-time-to-read {
    font-size: 1.1rem;
    line-height: 1.4;
    opacity: 0.5;
  }
`

const AuthorBox = () => {
  return (
    <StyledAuthorBox>
      {/* <img src={AuthorImage} alt="Antonio Rodriguez" /> */}
      <div className="post-info">
        {/* <span className="author-name">Antonio Rodríguez</span> */}
        <span className="post-date">
          Published on <strong>November 15, 2019</strong>
        </span>
        <span className="post-time-to-read">5 minute read</span>
      </div>
    </StyledAuthorBox>
  )
}

export default AuthorBox
