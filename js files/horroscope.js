let months = [
    "May",
    "June",
    "April"
]; //add 3 months to months variable

let horoscope = {
    "April": "Aries",
    "May": "Taurus",
    "June": "Gemini"
}; // assign the 3 months to zodiac signs

let user = "May" // user chooses may, you can change this for a different response

let sign = horoscope[user];  // assign the value of the horoscope with the user to the sign variable

console.log("Your zodiac sign is " + sign); //print with the sign variable

//run with "node "horroscope.js"