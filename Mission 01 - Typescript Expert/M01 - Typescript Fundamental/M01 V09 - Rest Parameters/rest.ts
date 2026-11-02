const sum = (...numbers: number[]): number => {
  return numbers.reduce((total, sum) => total + sum, 0);
};

console.log(sum(1, 2, 12, 1223, 12, 43, 3, 4));
