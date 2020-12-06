const canSum = (targetSum, numbers) => {
  let result = false;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === targetSum) {
        result = true;
        break;
      }
    }
  }

  return result;
};

console.log(canSum(7, [5, 3, 4]));
