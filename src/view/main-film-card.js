import {createElement} from "../utils.js";

const createFilmCardTemplate = (film) => {
  const {title, rating, year, duration, genres, description, comments, image, history, watchlist, favorite} = film;

  const genShortDescription = () => {
    return description.length < 140 ?
      description :
      description.substring(0, 140) + `...`;
  };

  const historyClassName = history
    ? `film-card__controls-item--active`
    : ``;

  const watchlistClassName = watchlist
    ? `film-card__controls-item--active`
    : ``;

  const favoriteClassName = favorite
    ? `film-card__controls-item--active`
    : ``;


  return `
  <article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${year}</span>
      <span class="film-card__duration">${duration}</span>
      <span class="film-card__genre">${genres[0]}</span>
    </p>
    <img src="./images/posters/${image}" alt="" class="film-card__poster">
    <p class="film-card__description">${genShortDescription()}</p>
    <a class="film-card__comments">${comments.length} comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${watchlistClassName}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${historyClassName}" type="button">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite ${favoriteClassName}" type="button">Mark as favorite</button>
    </div>
  </article>
  `;
};


export default class FilmCard {
  constructor(film) {
    this._element = null;
    this._film = film;
  }

  getTemplate() {
    return createFilmCardTemplate(this._film);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


