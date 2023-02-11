import styled from "styled-components";

const media = {
  desktop: "@media(min-width:1024px)",
};

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;

  ${media.desktop} {
    display: flex;
    flex-direction: row;
  }

  .row {
    margin: 1rem;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100vh;
    ${media.desktop} {
      position: static;
    }
  }

  h2 {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #2d3748;
  }

  h1 {
    margin-bottom: 7px;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
    color: #1a202c;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #4a5568;
  }

  input {
    height: 35px;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    padding: 7px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #2d3748;

    :focus {
      outline: none;
    }
  }

  button {
    margin-top: 7px;
    :hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
  }
  div {
    gap: 7px;
    padding: 2rem;
    margin-top: 5rem;
    width: 90%;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    position: absolute;

    ${media.desktop} {
      position: static;
    }
  }
  .HelperLink {
    margin-top: 2rem;
    align-self: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #616161;
    > a {
      color: #2b6cb0;
      :hover {
        cursor: pointer;
      }
    }
  }
`;
