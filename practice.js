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

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   console.log(player.playtime);
//   console.log(total);
// });

// console.log(typeof totalAveragePlaytimePerGame);

// function calculateTotal(number) {
//   let total = 0;
//   for (i = 0; i <= number; i += 1) {
//     total += i;
//   }

//   return total;
// }

// calculateTotal(5);

const handleSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.currentTarget;
  if (email.value === "" || message.value === "") {
    return alert("Введите значение");
  }
  console.log(email.value);

  console.log({ email: email.value, message: message.value });
  event.currentTarget.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};

formInput.addEventListener("submit", handleSubmit);
