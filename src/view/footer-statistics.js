import {createElement} from "../utils.js";

const createFooterStatisticsTemplate = (films) => {
  const summarySiteFilmValue = films.length;
  return `
  <p>${summarySiteFilmValue} movies inside</p>
  `;
};

export default class FooterStatistics {
  constructor(films) {
    this._element = null;
    this._films = films;
  }

  getTemplate() {
    return createFooterStatisticsTemplate(this._films);
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
