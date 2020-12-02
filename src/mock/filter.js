const filmToFilterMap = {
  all: (films) => films.length,
  Watchlist: (films) => films
    .filter((film) => film.watchlist).length,
  History: (films) => films
    .filter((film) => film.history).length,
  Favorites: (films) => films
    .filter((film) => film.favorite).length,
};

export const generateFilter = (films) => {
  return Object.entries(filmToFilterMap).map(([filterName, countFilms]) => {
    return {
      name: filterName,
      count: countFilms(films),
    };
  });
};
