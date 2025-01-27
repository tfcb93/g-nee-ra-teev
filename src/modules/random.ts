import seedrandom from 'seedrandom';

export function randomBetweenNumbers(min: number, max: number, generator:seedrandom.PRNG): number {
    // from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values
    return Math.trunc(generator() * (max - min) + min);
  }