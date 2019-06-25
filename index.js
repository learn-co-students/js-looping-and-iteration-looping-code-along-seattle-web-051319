// Code your solutions in this file
// let names = ["Ada", "Brendan", "Ali"];
// let event = "surprise"
function writeCards(names, event){
  let cards = [];
  for (let i = 0; i < names.length; i ++){
    cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return cards;
}



// In index.js, build a function named writeCards() that accepts two arguments: an array of string names, and an event name.
// Create a for loop with a counter that starts at 0 and increments at the end of each loop. The condition should halt the for loop after the last name in the array is printed out in the loop body.



// To get more acquainted with while, your task is to write a function, countdown, that takes in any positive integer and, starting from that number, counts down to zero using console.log()
 function countdown(num) {
    console.log(num)
  while (num > 0) {
    console.log(num -= 1);

   }
}
