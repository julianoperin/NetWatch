import React from "react";
// Components
import Thumb from "../Thumb";
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
// Image
import NoImage from "../../images/no_image.jpg";
// Styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";

const MovieInfo = ({ movie }) => (
  <Wrapper backdrop={movie.backdrop_path}>
    <Content>
      <Thumb
        image={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : NoImage
        }
        clickable={false}
      />
      <Text>
        <h1>{movie.title}</h1>
        <h3>PLOT</h3>
        <p>{movie.overview}</p>

        <div className="rating-directors">
          <div>
            <h3>RATING</h3>
            <div className="score">{movie.vote_average}</div>
          </div>
          <div className="director">
            <h3>DIRECTOR:{movie.directors.length > 1 ? "S" : ""}</h3>
            {movie.directors.map((director) => (
              <span key={director.credit_id}>{director.name}</span>
            ))}
          </div>
          <div>
            <h3>Release Date</h3>
            <div className="director">{movie.release_date}</div>
          </div>
          <div>
            <h3>Vote Count</h3>
            <div className="director">{`${movie.vote_count}`}</div>
          </div>
        </div>
      </Text>
    </Content>
  </Wrapper>
);

export default MovieInfo;
