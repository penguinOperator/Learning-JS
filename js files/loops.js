let randomNumber = Math.floor(Math.random() * 10); //define

while (randomNumber != 7) {
    console.log(randomNumber + " Duck"); //if randomNumber is not 7, print duck
    randomNumber = Math.floor(Math.random() * 10); // get new number
} //repeat until 7

console.log(randomNumber + " Goose"); //end loop and print goose