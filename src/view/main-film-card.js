export const createFilmCardTemplate = (film) => {
  const {title, raiting, year, duration, genres, description, comments, image} = film;

  const genShortDescription = () => {
    return description.length < 140 ?
      description :
      description.substring(0, 140) + `...`;
  };

  return `
  <article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating"${raiting}</p>
    <p class="film-card__info">
      <span class="film-card__year">${year}</span>
      <span class="film-card__duration">${duration}</span>
      <span class="film-card__genre">${genres[0]}</span>
    </p>
    <img src="./images/posters/${image}" alt="" class="film-card__poster">
    <p class="film-card__description">${genShortDescription()}</p>
    <a class="film-card__comments">${comments.length} comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
    </div>
  </article>
  `;
};


