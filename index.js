// 1
const friend = ["Mango","Poly","Kiwi","Ajax"];
let string = "";
for (let i = 0; i < 1; i += 1){
    console.log(`${friend[0]},${friend[1]},${friend[2]},${friend[3]}`);
}
console.log(friend.join());
// 2
const card = [
    "Карточка-1",
    "Карточка-2",
    "Карточка-3",
    "Карточка-4",
    "Карточка-5",
];
const cards = card.slice()
// 3
const cardToRemove = "Карточка-3"
const card3 = cards.indexOf(cardToRemove);
cards.splice(card3,1)
// 4
const cardToInsert = "Карточка-6";
cards.splice(5,0, cardToInsert)
console.log(cards);
// 5
const cardToUpdate = "Карточка-4";
cards.splice(3,1,cardToUpdate)
console.log(cards);
