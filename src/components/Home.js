import React, { useState, useEffect } from "react";

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

// Components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import { Spinner } from "./Spinner/Spinner.styles";
import SearchBar from "./SearchBar/Index";
import Button from "./Button";

// Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

// Image
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm } = useHomeFetch();
  // console.log(state.results);
  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      {!searchTerm && state.results[1] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[1].backdrop_path}`}
          title={state.results[1].title}
          text={state.results[1].overview}
        />
      ) : null}
      <Grid
        header={searchTerm ? `Results for " ${searchTerm}"` : "Featured Movies"}
      >
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="Fetch More Movies" />
      )}
    </>
  );
};

export default Home;
