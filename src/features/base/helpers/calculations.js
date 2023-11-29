export const totalScore = (arrayOfAnswers) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return arrayOfAnswers.reduce(reducer);
};
