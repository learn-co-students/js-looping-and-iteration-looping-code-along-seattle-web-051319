function writeCards (names, event) {
	const thanks = [];
	
	for (let i = 0; i < names.length; i++) {
		thanks.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
	}
	
	return thanks;
}

function countdown (num) {
	while (num >= 0) {
		console.log(num);
		num--;
	}
}