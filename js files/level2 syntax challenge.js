let userMonth = ""

function getZodiac(userMonth) {
    let signs = {
        May: "Taurus",
        June: "Gemini",
        July: "Cancer"
    }

    return signs[userMonth]
}

console.log(getZodiac("May"));

