import React from 'react';
import { connect } from 'react-redux';
import * as MovieAction from '../actions/movieAction';

const Sidebar = ({ categories, selectMovie }) => {
  return (
    <aside>
      {categories.map((category) => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          <ul>
            {category.movies.map((movie) => (
              <li key={movie.id}>
                {movie.title} was released in {movie.released}
                <button type="button" onClick={()=> selectMovie(category, movie)}>PLAY</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

const mapDispatchToProps = (dispatch) => ({
  selectMovie: (category, movie) => dispatch(MovieAction.selectMovie(category, movie)),
});
const mapStateToProps = (state) => ({
  categories: state.movieReducer.categories,
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
