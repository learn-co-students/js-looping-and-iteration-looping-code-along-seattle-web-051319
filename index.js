// Code your solutions in this file
function writeCards(names, event){
    let theArray = []
    for(let i = 0; i < names.length; i++){
        theArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return theArray;
}

function countdown(count){
    while(count > -1){
        console.log(count);
        count--;
    }
}