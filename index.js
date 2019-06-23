function writeCards(recipients) {
    let i = 0;
    let cards = [];
    while (i < recipients.length){
        cards.push(`Thank you, ${recipients[i]}, for the wonderful surprise gift!`);
        i++;
    }
    return cards;
}

function countdown(num){
    let i = num;
    while(i >= 0) {
        console.log(i);
        i--;
    }
}