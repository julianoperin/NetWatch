import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : "#000"};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 5px;

  h1 {
    font-family: "Lora", serif;
    font-size: 2.2rem;
  }

  .genres {
    line-height: 1.5;
  }

  .underline {
    text-decoration: underline;
  }

  /* STACK LIST */
  .StackUl ul {
    list-style-type: none;
    width: 400px;
    height: auto;
    margin: 26px 0 !important;
    padding-left: 0;
  }

  .StackUl ul li {
    font-size: 1.3rem;
    padding: 15px 0;
    border-bottom: 1px solid #fff;
    text-align: left;
    transition: margin-left 0.3s linear, font-weight 0.2s linear,
      color 0.3s linear;
    -webkit-transition: margin-left 0.3s linear, font-weight 0.2s linear,
      color 0.3s linear;
    -moz-transition: margin-left 0.3s linear, font-weight 0.2s linear,
      color 0.3s linear;
    -o-transition: margin-left 0.3s linear, font-weight 0.2s linear,
      color 0.3s linear;
    -ms-transition: margin-left 0.3s linear, font-weight 0.2s linear,
      color 0.3s linear;
  }

  .StackUl ul li:first-child {
    border-top: 1px solid #fff;
  }

  .StackUl ul li:hover {
    margin-left: 20px;
    font-weight: 600;
    /* color: #b237f3; */
  }

  /* END STACK LIST */

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }

  @media screen and (max-width: 500px) {
    .StackUl ul {
      width: 350px;
    }
  }
  @media screen and (max-width: 415px) {
    /* display: block; */
    /* max-height: none; */
    .StackUl ul li {
      font-size: 0.8rem;
    }
    .StackUl ul {
      width: 300px;
    }
  }

  @media screen and (max-width: 380px) {
    .StackUl ul li {
      font-size: 0.8rem;
    }
    .StackUl ul {
      width: 250px;
    }
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  .score {
    color: #fff;
    font-weight: 800;
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;
