import styled from 'styled-components';

export const main = styled.main`
  font-family: "Poppins", sans-serif;
  padding: 20px 16px;
  background-color: #f9fafb;

  display: flex;
  justify-content: center;
`;

export const postContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.05);

  /* 🔥 DESKTOP */
  @media (min-width: 900px) {
    max-width: 850px;
    padding: 40px;
    gap: 30px;
  }
`;

export const postContent = styled.div`
  line-height: 1.7;
  font-size: 1rem;
  color: #222;

  p {
    margin: 12px 0;
    text-align: justify;
  }

  h1, h2, h3 {
    margin-top: 24px;
    margin-bottom: 12px;
    font-weight: 700;
    color: #4A7C59;
  }

  h1 { font-size: 1.8rem; }
  h2 { font-size: 1.4rem; }
  h3 { font-size: 1.2rem; }

  ul, ol {
    padding-left: 20px;
    margin: 14px 0;
  }

  blockquote {
    border-left: 4px solid #4A7C59;
    padding-left: 14px;
    margin: 20px 0;
    background: #f5f7f6;
    border-radius: 8px;
    padding: 14px;
    color: #555;
    font-style: italic;
  }

  pre {
    background-color: #eaeaea;
    padding: 14px;
    border-radius: 8px;
    overflow-x: auto;
  }

  /* 🔥 DESKTOP */
  @media (min-width: 900px) {
    line-height: 1.8;
    font-size: 1.15rem;

    h1 { font-size: 2.2rem; }
    h2 { font-size: 1.8rem; }
    h3 { font-size: 1.4rem; }
  }
`;

export const postBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  hr {
    background-color: #4A7C59;
    height: 6px;
    border-radius: 5px;
    border: none;
  }

  p {
    color: #1d1d1d;
    opacity: 0.85;
    text-align: justify;
  }

  ul, ol { margin: 16px 0; padding-left: 20px; list-style-position: outside; }

  /* 🔥 DESKTOP */
  @media (min-width: 900px) {
    gap: 20px;
  }
`;

export const postFooter = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  span {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  span h3 {
    color: #4A7C59;
    font-weight: 700;
  }

  span img {
    width: 180px;
    align-self: center;
    border-radius: 8px;
  }

  span p {
    text-align: justify;
    opacity: 0.8;
  }

  /* 🔥 DESKTOP */
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: center;
    gap: 40px;

    span {
      max-width: 300px;
    }
  }
`;
