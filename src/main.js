import HeaderProfile from "./view/header-profile.js";
import NavMenu from "./view/main-navigation.js";
import {createMainStatisticTemplate} from "./view/main-statistic.js";
import {createMainListSortTemplate} from "./view/main-list-sort.js";
import {createMainFilmContainerTemplate} from "./view/main-films-container.js";
import FilmCard from "./view/main-film-card.js";
import FooterStatistics from "./view/footer-statistics.js";
import {createShowMoreFilmsBottunTemplate} from "./view/show-more-films-button.js";
import {createFilmDetailPopupTemplate} from "./view/film-detail-popup.js";
import {generateFilmItem} from "./mock/film.js";
import {generateUserStatistic} from "./mock/userStatistics.js";
import {getRandomInteger} from "./utils.js";
import {generateFilter} from "./mock/filter.js";
import {renderTemplate, renderElement, RenderPosition} from "./utils.js";

const ALL_FILM_COUNT = 20;
// const MAIN_FILM_COUNT = 5;
const SECONDARY_FILM_COUNT = 2;
const FILMS_COUNT_PER_STEP = 5;

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
const siteBody = document.querySelector(`body`);

renderElement(siteHeaderElement, new HeaderProfile(statistics[0]).getElement(), RenderPosition.BEFOREEND);
renderElement(siteMainElement, new NavMenu(filters).getElement(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createMainListSortTemplate(), `beforeend`);
renderTemplate(siteMainElement, createMainStatisticTemplate(statistics[0]), `beforeend`);
renderTemplate(siteMainElement, createMainFilmContainerTemplate(), `beforeend`);
renderElement(footerStatisticsElements, new FooterStatistics(films).getElement(), RenderPosition.BEFOREEND);

const mainFilmListContainer = document.querySelector(`.films-list__container--main`);
const ratedFilmListContainer = document.querySelector(`.films-list__container--rated`);
const commentedFilmListContainer = document.querySelector(`.films-list__container--commented`);
const filmsList = document.querySelector(`.films-list`);

for (let i = 1; i <= Math.min(films.length, FILMS_COUNT_PER_STEP); i++) {
  renderElement(mainFilmListContainer, new FilmCard(films[i]).getElement(), RenderPosition.BEFOREEND);
}

for (let i = 0; i < SECONDARY_FILM_COUNT; i++) {
  renderElement(ratedFilmListContainer, new FilmCard(filmItem(films)).getElement(), RenderPosition.BEFOREEND);
}

for (let i = 0; i < SECONDARY_FILM_COUNT; i++) {
  renderElement(commentedFilmListContainer, new FilmCard(filmItem(films)).getElement(), RenderPosition.BEFOREEND);
}

// renderTemplate(siteBody, createFilmDetailPopupTemplate(films[0]), `beforeend`);

if (films.length > FILMS_COUNT_PER_STEP) {
  let renderedFilmCount = FILMS_COUNT_PER_STEP;

  renderTemplate(filmsList, createShowMoreFilmsBottunTemplate(), `beforeend`);
  const loadMoreButton = document.querySelector(`.films-list__show-more`);

  loadMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    films
      .slice(renderedFilmCount, renderedFilmCount + FILMS_COUNT_PER_STEP)
      .forEach((film) => renderTemplate(mainFilmListContainer, createFilmCardTemplate(film), `beforeend`));

    renderedFilmCount += FILMS_COUNT_PER_STEP;

    if (renderedFilmCount >= films.length) {
      loadMoreButton.remove();
    }
  });
}

