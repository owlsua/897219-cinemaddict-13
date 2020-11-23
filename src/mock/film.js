import {getRandomInteger} from '../utils.js';

const genTitle = () => {
  const titles = [
    `The Seven Samurai`,
    `Bonnie and Clyde`,
    `Reservoir Dogs`,
    `Airplane!`,
    `Pans Labyrinth`,
    `Doctor Zhivago`,
    `The Deer Hunter`,
    `Close Encounters of the Third Kind`,
    `Up`,
    `Rocky`,
    `Memento`,
    `Braveheart`,
    `Slumdog Millionaire`,
    `The Lord of the Rings: The Return of the King`,
    `Beauty and the Beast`,
    `Seven`,
    `Inception`,
    `Die Hard`,
    `The Lord of the Rings: The Fellowship of the Ring`,
    `Amadeus`
  ];

  const randomIndex = getRandomInteger(0, titles.length - 1);

  return titles[randomIndex];
};

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

const genImage = () => {
  const images = [
    `made-for-each-other.png`,
    `popeye-meets-sinbad.png`,
    `sagebrush-trail.jpg`,
    `santa-claus-conquers-the-martians.jpg`,
    `the-dance-of-life.jpg`,
    `the-great-flamarion.jpg`,
    `the-man-with-the-golden-arm.jpg`,
  ];

  const randomIndex = getRandomInteger(0, images.length - 1);

  return images[randomIndex];
};

// const genComment = () => {
//   return {
//     emogi: `/images/emoji/smile.png`,
//     text: `Hi`,
//     authorName: `Tim Cook`,
//     date: `2019/12/31 23:59`,
//   };
// };

export const generateFilmItem = () => {
  return {
    title: genTitle(),
    rating: getRandomInteger(1, 10),
    director:	`Anthony Mann`,
    writers: `Anne Wigton, Heinz Herald, Richard Weil`,
    actors:	`Erich von Stroheim, Mary Beth Hughes, Dan Duryea`,
    date:	`30 March 1945`,
    year: getRandomInteger(1930, 2020),
    country: `USA`,
    duration: `1 hour 55 min`,
    genre: `Action`,
    comments: getRandomInteger(1, 10),
    image: genImage(),
    description: generateDescription(),
  };
};
