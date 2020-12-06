import {createElement} from "../utils.js";

const createFilterTemplate = (filter) => {
  const {name, count} = filter;

  const genName = () => {
    return name === `all` ? `All moveis` : name;
  };

  return (
    `
       <a href="#${name}" class="main-navigation__item">
       ${genName()}

       ${name === `all` ? ` ` : `<span class="main-navigation__item-count">${count}</span>`}

       </a>
       `
  );
};

const createMainNavigationTemplate = (filterItems) => {
  const filterItemsTemplate = filterItems
      .map((filter, index) => createFilterTemplate(filter, index === 0))
      .join(``);

  return `
  <nav class="main-navigation">
    <div class="main-navigation__items">
    ${filterItemsTemplate}
    </div>
    <a href="#stats" class="main-navigation__additional main-navigation__additional--active">Stats</a>
  </nav>
  `;
};

export default class NavMenu {
  constructor(filters) {
    this._element = null;
    this._filters = filters;
  }

  getTemplate() {
    return createMainNavigationTemplate(this._filters);
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
