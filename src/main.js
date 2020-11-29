import {createHeaderProfileTemplate} from "./view/header-profile.js";
import {createMainMenuTemplate} from "./view/main-navigation.js";
// import {createMainStatisticTemplate} from "./view/main-statistic.js";
import {createMainListSortTemplate} from "./view/main-list-sort.js";
import {createMainFilmContainerTemplate} from "./view/main-films-container.js";
import {createFilmCardTemplate} from "./view/main-film-card.js";
import {createFooterStatisticsTemplate} from "./view/footer-statistics.js";
import {createFilmDetailPopupTemplate} from "./view/film-detail-popup.js";
import {generateFilmItem} from "./mock/film.js";
import {getRandomInteger} from "./utils.js";


const ALL_FILM_COUNT = 20;
const MAIN_FILM_COUNT = 5;
const SECONDARY_FILM_COUNT = 2;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const films = new Array(ALL_FILM_COUNT).fill().map(generateFilmItem);

const film = (filmsArr) => {
  const index = getRandomInteger(0, filmsArr.length - 1);

  return filmsArr[index];
};

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const footerStatisticsElements = document.querySelector(`.footer__statistics`);
const siteBody = document.querySelector(`body`);


render(siteHeaderElement, createHeaderProfileTemplate(), `beforeend`);
render(siteMainElement, createMainMenuTemplate(), `beforeend`);
render(siteMainElement, createMainListSortTemplate(), `beforeend`);
// render(siteMainElement, createMainStatisticTemplate(), `beforeend`);
render(siteMainElement, createMainFilmContainerTemplate(), `beforeend`);
render(footerStatisticsElements, createFooterStatisticsTemplate(films), `beforeend`);

const mainFilmListContainer = document.querySelector(`.films-list__container--main`);
const ratedFilmListContainer = document.querySelector(`.films-list__container--rated`);
const commentedFilmListContainer = document.querySelector(`.films-list__container--commented`);

for (let i = 0; i < MAIN_FILM_COUNT; i++) {
  render(mainFilmListContainer, createFilmCardTemplate(films[i]), `beforeend`);
}

for (let i = 0; i < SECONDARY_FILM_COUNT; i++) {
  render(ratedFilmListContainer, createFilmCardTemplate(film(films)), `beforeend`);
}

for (let i = 0; i < SECONDARY_FILM_COUNT; i++) {
  render(commentedFilmListContainer, createFilmCardTemplate(film(films)), `beforeend`);
}

render(siteBody, createFilmDetailPopupTemplate(films[0]), `beforeend`);

