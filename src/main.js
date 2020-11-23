import {createHeaderProfileTemplate} from "./view/header-profile.js";
import {createMainMenuTemplate} from "./view/main-navigation.js";
import {createMainStatisticTemplate} from "./view/main-statistic.js";
import {createMainListSortTemplate} from "./view/main-list-sort.js";
import {createMainFilmContainerTemplate} from "./view/main-films-container.js";
import {createFilmCardTemplate} from "./view/main-film-card.js";
import {createFilmDetailPopupTemplate} from "./view/film-detail-popup.js";
// import {generateFilmItem} from "./mock/film.js";

const MAIN_TASK_COUNT = 5;
const SECONDARY_TASK_COUNT = 2;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const siteBody = document.querySelector(`body`);


render(siteHeaderElement, createHeaderProfileTemplate(), `beforeend`);
render(siteMainElement, createMainMenuTemplate(), `beforeend`);
render(siteMainElement, createMainListSortTemplate(), `beforeend`);
render(siteMainElement, createMainStatisticTemplate(), `beforeend`);
render(siteMainElement, createMainFilmContainerTemplate(), `beforeend`);

const mainFilmListContainer = document.querySelector(`.films-list__container--main`);
const ratedFilmListContainer = document.querySelector(`.films-list__container--rated`);
const commentedFilmListContainer = document.querySelector(`.films-list__container--commented`);

for (let i = 0; i < MAIN_TASK_COUNT; i++) {
  render(mainFilmListContainer, createFilmCardTemplate(), `beforeend`);
}

for (let i = 0; i < SECONDARY_TASK_COUNT; i++) {
  render(ratedFilmListContainer, createFilmCardTemplate(), `beforeend`);
  render(commentedFilmListContainer, createFilmCardTemplate(), `beforeend`);
}

render(siteBody, createFilmDetailPopupTemplate(), `beforeend`);

