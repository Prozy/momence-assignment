export const roundFloatToThreeDecimalPlaces = (number: number) => {
  return Math.round(number * 1000) / 1000;
};
