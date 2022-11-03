// // Отримайте ініціали імені
// // Даний рядок із кількох слів із одним пробілом між кожним із них. Скоротіть назву та поверніть ініціали імені.

// // Result
// // 'GRRM'
// const input = "George Raymond Richard Martin";

// console.log(numbers);
// console.log(resultMap);

// function getFirstLettersName(name) {
//   const result = name
//     .split(" ")
//     .map((element) => element[3])
//     .join("");
//   console.log(result);
// }

// getFirstLettersName(input);

// const numbers = [1, 2, 3, 4];
// const resultMap = numbers.map((number) => number * 2);

// const qwe = ["qwe", "fsdfsdf", "dfslkjj"];
// console.log(qwe[qwe.length - 1]);

const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((total, player) => {
  console.log(player.playtime);
  console.log(total);
});

console.log(typeof totalAveragePlaytimePerGame);
