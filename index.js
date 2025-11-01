// // 1
// const friend = ["Mango","Poly","Kiwi","Ajax"];
// let string = "";
// for (let i = 0; i < 1; i += 1){
//     console.log(`${friend[0]},${friend[1]},${friend[2]},${friend[3]}`);
// }
// console.log(friend.join());
// // 2
// const card = [
//     "Карточка-1",
//     "Карточка-2",
//     "Карточка-3",
//     "Карточка-4",
//     "Карточка-5",
// ];
// const cards = card.slice()
// // 3
// const cardToRemove = "Карточка-3"
// const card3 = cards.indexOf(cardToRemove);
// cards.splice(card3,1)
// // 4
// const cardToInsert = "Карточка-6";
// cards.splice(5,0, cardToInsert)
// console.log(cards);
// // 5
// const cardToUpdate = "Карточка-4";
// cards.splice(3,1,cardToUpdate)
// console.log(cards);

// HW 39
// 1
// function logItems(array) {
//     let result
// for (let i = 0; i < array.length; i+= 1) {
//      result = console.log(`${i + 1} - ${array[i]}`);
//     }
//     return result
// }
// console.log(logItems(['Mango', 'Poly', 'Ajax']));

// // 2
//  function calculateEngravingPrice(message, pricePerWord) {
//     let word = message.split(" ")
//     const rezult = word.length * pricePerWord;
//     return rezult
// }
// console.log(calculateEngravingPrice ("qwer qwer qwer qwer qwer", 5));

// // 3
// function findLongestWord(string) {
//   const words = string.split(" ");
//   let longestWord = [0];
//   for (let i = 0; i < words.length; i += 1) {
//     if (longestWord.length < words[i].length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// }
// console.log(
//   findLongestWord(
//     "Існують такі системи відліку, відносно яких тіло зберігає стан спокою або рівномірного прямолінійного руху, якщо на тіло не діють жодні сили або ці сили скомпенсовані."
//   )
// );

// // 4
// function formatString(string) {
//   let format;
//     if (string.length <= 40) {
//       format = string;
//     } else if (string.length > 40){
//         format = string.slice(0, 40,) + "..."
//     }
// return format
// }
// console.log(formatString("Прискорення якого набуває тіло внаслідок дії сили, прямо пропорційне цій силі та обернено пропорційне масі тіла."));


// 5
function checkForSpam(message){
    let checkMessage = message.slice(" ");
    return checkMessage.includes("spam" || "sale")
    // if (checkMessage.includes(spam,sale)){
    //     console.log();
        
    // }
}
console.log(checkForSpam("spam"));
