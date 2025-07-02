let myNumber = 123; // sets myNumber to 123. the ; ends the line for clarity
let binary = ""; // sets binary as an empty string

while (myNumber > 0) { // loop until myNumber is 0
    if (myNumber % 2 === 0) { // check if myNumber is even with % 2 === 0, === 1 is odd
        binary = "0" + binary; // add 0 to the start of binary since we do 0 + binary
    } else { // if not even then odd "else"
        binary = "1" + binary; // move 0 to the right and add 1 to the start of binary since we do 1 + binary.
    }
    myNumber = Math.floor(myNumber / 2); // what?
}

console.log(binary); // prints the binary