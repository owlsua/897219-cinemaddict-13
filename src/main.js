import {createHeaderProfileTemplate} from "./view/header-profile.js";
import {createMainNavigationTemplate} from "./view/main-navigation.js";
import {createMainStatisticTemplate} from "./view/main-statistic.js";
import {createMainListSortTemplate} from "./view/main-list-sort.js";
import {createMainFilmContainerTemplate} from "./view/main-films-container.js";
import {createFilmCardTemplate} from "./view/main-film-card.js";
import {createFooterStatisticsTemplate} from "./view/footer-statistics.js";
import {createShowMoreFilmsBottunTemplate} from "./view/show-more-films-button.js";
// import {createFilmDetailPopupTemplate} from "./view/film-detail-popup.js";
import {generateFilmItem} from "./mock/film.js";
import {generateUserStatistic} from "./mock/userStatistics.js";
import {getRandomInteger} from "./utils.js";
import {generateFilter} from "./mock/filter.js";

const ALL_FILM_COUNT = 20;
// const MAIN_FILM_COUNT = 5;
const SECONDARY_FILM_COUNT = 2;
const FILMS_COUNT_PER_STEP = 5;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const films = new Array(ALL_FILM_COUNT).fill().map(generateFilmItem);
const statistics = new Array(1).fill().map(generateUserStatistic);

const filmItem = (filmsArr) => {
  const index = getRandomInteger(0, filmsArr.length - 1);

  return filmsArr[index];
};

const filters = generateFilter(films);

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const footerStatisticsElements = document.querySelector(`.footer__statistics`);
// const siteBody = document.querySelector(`body`);

render(siteHeaderElement, createHeaderProfileTemplate(statistics[0]), `beforeend`);
render(siteMainElement, createMainNavigationTemplate(filters), `beforeend`);
render(siteMainElement, createMainListSortTemplate(), `beforeend`);
render(siteMainElement, createMainStatisticTemplate(statistics[0]), `beforeend`);
render(siteMainElement, createMainFilmContainerTemplate(), `beforeend`);
render(footerStatisticsElements, createFooterStatisticsTemplate(films), `beforeend`);

const mainFilmListContainer = document.querySelector(`.films-list__container--main`);
const ratedFilmListContainer = document.querySelector(`.films-list__container--rated`);
const commentedFilmListContainer = document.querySelector(`.films-list__container--commented`);
const filmsList = document.querySelector(`.films-list`);

for (let i = 1; i <= Math.min(films.length, FILMS_COUNT_PER_STEP); i++) {
  render(mainFilmListContainer, createFilmCardTemplate(films[i]), `beforeend`);
}

for (let i = 0; i < SECONDARY_FILM_COUNT; i++) {
  render(ratedFilmListContainer, createFilmCardTemplate(filmItem(films)), `beforeend`);
}

for (let i = 0; i < SECONDARY_FILM_COUNT; i++) {
  render(commentedFilmListContainer, createFilmCardTemplate(filmItem(films)), `beforeend`);
}

// render(siteBody, createFilmDetailPopupTemplate(films[0]), `beforeend`);

if (films.length > FILMS_COUNT_PER_STEP) {
  let renderedFilmCount = FILMS_COUNT_PER_STEP;

  render(filmsList, createShowMoreFilmsBottunTemplate(), `beforeend`);
  const loadMoreButton = document.querySelector(`.films-list__show-more`);

  loadMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    films
      .slice(renderedFilmCount, renderedFilmCount + FILMS_COUNT_PER_STEP)
      .forEach((film) => render(mainFilmListContainer, createFilmCardTemplate(film), `beforeend`));

    renderedFilmCount += FILMS_COUNT_PER_STEP;

    if (renderedFilmCount >= films.length) {
      loadMoreButton.remove();
    }
  });
}

