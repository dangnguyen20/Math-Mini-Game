export function getRandomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getUniqueNumbers(min, max) {
  let uniqueNumbers = new Set();
  while (true) {
    let randomNumbers = getRandomNumbers(min, max);
    if (!uniqueNumbers.has(randomNumbers)) {
      uniqueNumbers.add(randomNumbers);
      return randomNumbers;
    }
  }
}

export function getRandomOperator() {
  const operators = ["+", "-", "*", "/"];
  return operators[Math.floor(Math.random() * operators.length)];
}

export function getResult(first, second, operator) {
  first = parseInt(first);
  second = parseInt(second);
  if (operator === "+") {
    return first + second;
  } else if (operator === "-") {
    return first - second;
  } else if (operator === "*") {
    return first * second;
  } else if (operator === "/") {
    return first / second;
  }
}
