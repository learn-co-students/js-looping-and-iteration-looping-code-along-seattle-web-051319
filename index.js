// Code your solutions in this file
function writeCards(names, event) {
  let newNames = []
  for (let i = 0; i < names.length; i++) {
    newNames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return newNames
}

function countdown(number) {
  let i = 0
  while (i <= number) {
    console.log(number - i)
    i++
  }
}
