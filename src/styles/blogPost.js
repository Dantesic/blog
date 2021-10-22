import styled from 'styled-components'

export const Article = styled.article`
  padding: 3em 1.25em;
  /* Initial mobile design */
  max-width: 550px;
  margin: 0 auto;
  padding-bottom: 0;
  color: rgb(0, 26, 53);
  font-family: charter, Georgia, Cambria, "Times New Roman", Times, serif;
  line-height: 1.5;
  width: 37em;
  font-size: 1.2em;
  

  header {
  }

  header h1 {
    grid-area: title;
    color: rgb(0, 26, 53);
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 900;
  }

  a {
    font-weight: 600;
    color: #2ea3f2;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  section h1, h2, h3, h4, h5, h6 {
    color: rgb(0, 26, 53);
    margin-top: 2em;
    margin-bottom: 1.5em;
  }

  section p {
    margin-bottom: 1.3em;
  }

  section p:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 1366px) {
    padding: 5em 0;
  }

  @media (min-width: 1024px) {
    max-width: none;
    margin: 0 auto;
    padding: 5em 0;

    header {
    }

    header h1 {
      font-size: 2.5em;
    }
  }

  @media (max-width: 650px) {
    width: auto;
  }
`

export const Infobar = styled.section`
  display: flex;
  margin: 1.25em 0;

  @media (max-width: 768px) {
    p {
      margin-bottom: 0.2em !important;
    }

    flex-direction: column;
  }
`

export const Date = styled.p`
  color: rgb(0, 26, 53);

  @media (min-width: 1024px) {
    margin-bottom: 0.5em;
  }
`

export const Author = styled.p`
  color: rgb(0, 26, 53);
  margin-right: 0.5em;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`