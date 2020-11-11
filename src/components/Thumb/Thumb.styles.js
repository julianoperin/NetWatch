import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 8px 6px -6px black;
  animation: animateThumb 0.9s;

  :hover {
    /* opacity: 0.8; */
    cursor: pointer;
    transform: scale(1.1);
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
