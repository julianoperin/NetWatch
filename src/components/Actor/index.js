import React from "react";
// Styles
import { Wrapper, Image } from "./Actor.styles";

const Actor = ({ name, character, imageUrl }) => (
  <Wrapper>
    <Image src={imageUrl} alt="actor-thumb" />
    <h3>Name: {name}</h3>
    <p>Character: {character}</p>
  </Wrapper>
);

export default Actor;
