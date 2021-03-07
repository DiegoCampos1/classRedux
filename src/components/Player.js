import React from 'react';

class Player extends React.Component {
  render() {
    return (
      <div>
        <h2>categoria 1</h2>
        <h3>Filme 1</h3>
        <iframe
          title="MoviePlayer"
          width="560"
          height="315"
          src={'https://www.youtube.com/embed/V75dMMIW2B4'}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    );
  }
}

export default Player;
