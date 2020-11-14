import styled from "styled-components";

export const Wrapper = styled.div`
  color: #fff;
  background: black;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  transition: ease 0.5s;

  :hover {
    opacity: 0.6;
  }

  h3 {
    margin: 10px 0 0 0;
  }

  p {
    margin: 5px 0;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
`;
