import seedrandom from 'seedrandom';

type randomNumberOptions = {
  multiplier?: number,
  excludeZero?: boolean,
  trunc?: boolean
}

export function randomBetweenNumbers(min: number, max: number, generator:seedrandom.PRNG, options?: randomNumberOptions): number {

  // from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values
  if (!options) return Math.trunc(generator() * (max - min) + min);

  let result: number = 0;

  do {

    result = options.trunc ? Math.trunc(generator() * (max - min) + min) : generator() * (max - min) + min;
    if (options.multiplier) result = result * options.multiplier;
    
  }while(options.excludeZero && options.trunc && result == 0);

  return result;
}