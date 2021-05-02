import styled from "styled-components";

export const Wrapper = styled.div`
  background: #000;
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 3px 0 0 0;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 140px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 250px;

  @media screen and (max-width: 500px) {
    width: 170px;
  }
`;
