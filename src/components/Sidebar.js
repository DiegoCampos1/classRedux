import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        {
          id: 1,
          name: 'Fantasy',
          movies: [
            {
              id: 1,
              title: 'Harry Potter and the Prisoner of Azkaban',
              released: 2004,
              link: 'https://www.youtube.com/embed/lAxgztbYDbs',
            },
            {
              id: 2,
              title: 'The Lord of the Rings: The Fellowship of the Ring',
              released: 2001,
              link: 'https://www.youtube.com/embed/V75dMMIW2B4',
            },
          ],
        },
        {
          id: 2,
          name: 'Action',
          movies: [
            {
              id: 4,
              title: 'Shooter',
              released: 2007,
              link: 'https://www.youtube.com/embed/6ZVcPhDt-kM',
            },
          ],
        },
        {
          id: 3,
          name: 'Romantic',
          movies: [
            {
              id: 5,
              title: 'Me before you',
              released: 2016,
              link: 'https://www.youtube.com/embed/Eh993__rOxA',
            },
            {
              id: 6,
              title: 'The lake house',
              released: 2006,
              link: 'https://www.youtube.com/embed/fQ5lPbssHS8',
            },
          ],
        },
      ],
    };
  }

  render() {
    const { categories } = this.state;

    return (
      <aside>
        {categories.map((category) => (
          <div key={category.id}>
            <h3>{category.name}</h3>
            <ul>
              {category.movies.map((movie) => (
                <li key={movie.id}>
                  {movie.title} was released in {movie.released}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    );
  }
}

export default Sidebar;
