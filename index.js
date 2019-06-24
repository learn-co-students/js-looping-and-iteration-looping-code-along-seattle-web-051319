// Code your solutions in this file
// function writeCards(ary, event){
//   let thankYouCards = [];
//   for ( let counter = 0; counter < ary.length; counter++){
//     thankYouCards.push('Thank you, ${ary[counter]}, for the wonderful ${event} gift!')
//   }
//   return thankYouCards
// }



function writeCards( namesArray, event ) {
  let thankYouCards = []
  for ( let i = 0; i < namesArray.length; i++ ) {
    thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
  }
  return thankYouCards
}

function countdown( countdown ) {
  while ( countdown > 0 ) {
    console.log( countdown );
    countdown -= 1;
  }
  console.log( countdown );
}
