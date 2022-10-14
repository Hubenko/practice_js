// Отримайте ініціали імені
// Даний рядок із кількох слів із одним пробілом між кожним із них. Скоротіть назву та поверніть ініціали імені.

// Result
// 'GRRM'
const input = "George Raymond Richard Martin";

console.log(numbers);
console.log(resultMap);

function getFirstLettersName(name) {
  const result = name
    .split(" ")
    .map((element) => element[3])
    .join("");
  console.log(result);
}

getFirstLettersName(input);

const numbers = [1, 2, 3, 4];
const resultMap = numbers.map((number) => number * 2);
