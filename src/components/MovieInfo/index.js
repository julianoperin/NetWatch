import React from "react";
import PropTypes from "prop-types";
// Components
import Thumb from "../Thumb";
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
// Image
import NoImage from "../../images/no_image.jpg";
// Styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";
// helpers
import { calcTime, convertMoney } from "../../helpers";

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
        <p>{movie.overview}</p>

        <div className="rating-directors StackUl">
          <ul>
            <li>
              <span className="underline">Rating:</span>{" "}
              <span className="score">{movie.vote_average}</span>
            </li>
            <li>
              <span className="underline">Director</span>
              {movie.directors.length > 1 ? "s" : ""}:
              {movie.directors.map((director) => (
                <strong className="director" key={director.credit_id}>
                  {" "}
                  {director.name}
                  {movie.directors.length > 1 ? "," : ""}
                </strong>
              ))}
            </li>
            <li>
              <span className="underline">Running time:</span>{" "}
              {calcTime(movie.runtime)}
            </li>
            <li>
              <span className="underline">Budget:</span>{" "}
              {convertMoney(movie.budget)}
            </li>
            <li>
              <span className="underline">Revenue:</span>{" "}
              {convertMoney(movie.revenue)}
            </li>
            <li>
              <span className="underline">
                Genre
                {movie.genres.length > 1 ? "s" : ""}:
              </span>
              {movie.genres.map((item) => (
                <strong className="genres" key={item.id}>
                  {" "}
                  {item.name}
                  {movie.genres.length > 1 ? "," : ""}
                </strong>
              ))}
            </li>
            {/* 
            time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue} */}
          </ul>
        </div>
      </Text>
    </Content>
  </Wrapper>
);

MovieInfo.propTypes = {
  movie: PropTypes.object,
};

export default MovieInfo;
