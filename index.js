
// HW 39
// 1
function logItems(array) {
    let result
for (let i = 0; i < array.length; i+= 1) {
       console.log(`${i + 1} - ${array[i]}`);
    }
 
}
console.log(logItems(['Mango', 'Poly', 'Ajax']));

// // 2
 function calculateEngravingPrice(message, pricePerWord) {
    let word = message.split(" ")
    return ` ціна гравіювання становить ${word.length * pricePerWord}`
}
console.log(calculateEngravingPrice ("qwer qwer qwer qwer qwer qwer", 5));

// // 3
function findLongestWord(string) {
  const words = string.split(" ");
  let longestWord = words[0];
  for (let i = 0; i < words.length; i += 1) {
    if (longestWord.length < words[i].length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
console.log(
  findLongestWord(
    "Існують такі системи відліку, відносно яких тіло зберігає стан спокою або рівномірного прямолінійного руху, якщо на тіло не діють жодні сили або ці сили скомпенсовані."
  )
);

// // 4
function formatString(string) {
  let format;
    if (string.length <= 40) {
      format = string;
    } else if (string.length > 40){
        format = string.slice(0, 40,) + "..."
    }
return format
}
console.log(formatString("Прискорення якого набуває тіло внаслідок дії сили, прямо пропорційне цій силі та обернено пропорційне масі тіла."));


// 5
function checkForSpam(message){
   if (message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale")) {
    return true
   }else{
    return false
   }
}
console.log(checkForSpam("Spam sale gg qwer"));
console.log(checkForSpam("qwer qwer qwer"));

// 6
let input;
const numbers = [];
let total = 0;
do {
    input = prompt("введіть число");
    if (input === null) {
        break
    }
    if (isNaN(input)) {
        alert("було введено не число")
            continue
        
    }
    const number = Number(input)
    numbers.push(input);

} while (true);
if (numbers.length > 0) {
    for (let i = 0; i < numbers.length; i += 1) {
        total += numbers[i];

    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
    
}

