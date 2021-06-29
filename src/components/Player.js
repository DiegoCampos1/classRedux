import React from 'react';
import { connect } from 'react-redux';

const Player = ({ category, movie }) => {
  return (
    <div>
      <h2>{category.name}</h2>
      <h3>{movie.title}</h3>
      <iframe
        title="MoviePlayer"
        width="560"
        height="315"
        src={movie.link}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  category: state.movieReducer.selectedCategory,
  movie: state.movieReducer.selectedMovie,
});

export default connect(mapStateToProps)(Player);
