export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const genUserRank = (moviesValue) => {
  if (moviesValue <= 0) {
    return ``;
  } if (moviesValue <= 10) {
    return `Novice`;
  } if (moviesValue <= 20) {
    return `Fun`;
  } else {
    return `movie buff`;
  }
};
