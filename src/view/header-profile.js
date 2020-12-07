import {genUserRank, createElement} from "../utils.js";

const createHeaderProfileTemplate = (statistics) => {
  const {movies} = statistics;

  const rank = genUserRank(movies);

  return `
  <section class="header__profile profile">
    <p class="profile__rating">${rank}</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>
  `;
};

export default class HeaderProfile {
  constructor(statistics) {
    this._element = null;
    this._statistics = statistics;
  }

  getTemplate() {
    return createHeaderProfileTemplate(this._statistics);
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
