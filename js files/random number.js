let luckyNumber = 7 //luckyNumber is 7
let guess = Math.floor(Math.random() * 10) + 1; // guess will generate a random number from 0 to 9 and add 1 to the number it gets

while (guess !== luckyNumber) { //while guess isn't the same as luckyNumber
    console.log('Nope, ' + guess  + ' is not the lucky number') //print that
    guess = Math.floor(Math.random() * 10); //guess again
} //loop starts over when it reaches this point
console.log("yes, " + luckyNumber + " is the lucky") //loop ends when it gets 7