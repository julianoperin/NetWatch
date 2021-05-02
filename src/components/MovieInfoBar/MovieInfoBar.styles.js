import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  background: #000;
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;

  .column {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    border-radius: 20px;
    margin: 0 20px;
    flex: 1;

    :first-child {
      margin-left: 0;
    }

    :last-child {
      margin-right: 0;
    }

    span {
      font-size: 2rem;
      font-weight: 600;
      font-family: monospace;
    }

    strong {
      letter-spacing: 2px;
      font-size: 1.5rem;
      font-family: "Montserrat", sans-serif;
      font-style: italic;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;

    .column {
      margin: 20px 0;
    }
  }
`;
