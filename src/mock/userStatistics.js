import {getRandomInteger} from '../utils.js';

export const generateUserStatistic = () => {
  return {
    movies: getRandomInteger(0, 40),
    totalDuration: {
      hours: getRandomInteger(0, 100),
      minutes: getRandomInteger(0, 59)
    },
    topGenre: `Action`,
  };
};

