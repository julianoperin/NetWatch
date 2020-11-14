import React from "react";
import PropTypes from "prop-types";
// Styles
import { Wrapper, Content } from "./MovieInfoBar.styles";

const MovieInfoBar = ({ tagline }) => (
  <Wrapper>
    <Content>
      <div className="column">
        <p>
          <span>TagLine:</span> <strong>{tagline}</strong>
        </p>
      </div>
    </Content>
  </Wrapper>
);

MovieInfoBar.propTypes = {
  tagline: PropTypes.string,
};

export default MovieInfoBar;
