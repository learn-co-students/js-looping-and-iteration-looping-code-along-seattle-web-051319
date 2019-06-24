// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];
//
// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
//
//   return gifts;
// }
//
// wrapGifts(gifts);
// ------------


function writeCards(names, eventName) {
  let cards = [];
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
  }
  return cards
}

function countdown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i)
  };
}
