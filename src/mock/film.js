import {getRandomInteger} from '../utils.js';

const generateDescription = () => {
  const descriptions = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat.`,
    `Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`,
  ];
  const randomValue = getRandomInteger(0, 4);
  const randomIndex = getRandomInteger(0, descriptions.length - 1);
  const newDescriptions = [];

  for (let i = 0; i <= randomValue; i++) {
    const descriptionItem = descriptions[randomIndex];
    newDescriptions.push(descriptionItem);
  }

  const finalDescription = newDescriptions.join(` `);

  return finalDescription;
};

export const generateFilmItem = () => {
  return {
    title: `The dance of life`,
    image: `../../public/images/posters/the-dance-of-life.jpg`,
    description: generateDescription(),
  };
};
