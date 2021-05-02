import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background: #000;
  padding: 0 20px;
`;

export const Content = styled.div`
  position: relative;
  max-width: 1240px;
  width: 100%;
  height: 50px;
  background: #999;
  margin: 0 auto;
  border-radius: 5px;
  color: var(--white);

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 25px;
  }

  input {
    font-size: 1.3rem;
    position: absolute;
    left: 0;
    margin: 8px 0;
    padding: 0 0 5px 60px;
    border: 0;
    width: 90%;
    background: transparent;
    height: 40px;
    color: var(--white);

    ::placeholder {
      color: #fff;
      opacity: 1; /* Firefox */
    }

    :focus {
      outline: none;
    }
  }
`;
