export const createFooterStatisticsTemplate = (films) => {
  const summarySiteFilmValue = films.length;
  return `
  <p>${summarySiteFilmValue} movies inside</p>
  `;
};
