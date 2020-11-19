import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  transition: all 0.3s;

  animation: animateThumb 0.9s;

  :hover {
    opacity: 0.8;
    transform: scale(1.1);
    cursor: pointer;
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
