import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  background: #b435f5;
  width: 35%;
  min-width: 200px;
  height: 60px;
  border-radius: 5px;
  color: var(--white);
  font-weight: 500;
  border: 0;
  font-size: var(--fontBig);
  margin: 20px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
