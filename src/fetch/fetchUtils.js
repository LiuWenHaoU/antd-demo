import fill from 'lodash/fill';
export default (data, time = 1000) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });

export const arrayFromSeed = (seed, length = 0) => {
  const results = fill(Array(length || 1), 0).map(() =>
    Object.keys(seed).reduce((obj, key) => {
      const arr = seed[key];
      obj[key] = arr[Math.floor(
        Math.random() * arr.length
      )];
      return obj;
    }, {}));
  return length === 0 ? results[0] : results;
}

export const arrayFromLength = (length, map = (e, i) => i) => fill(Array(length), 0).map(map);

export const randomFromRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const randomFromArray = array => array[randomFromRange(0, array.length)];
