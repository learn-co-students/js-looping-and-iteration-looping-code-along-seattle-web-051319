// Code your solutions in this file

function writeCards(namesArray, event){
  let cardList = []
 for (let i = 0; i < namesArray.length; i++){
   cardList.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
 }
 return cardList
}

function countdown(num) {
    console.log(num)
  while (num > 0) {
    console.log(num -= 1);

  }

}
