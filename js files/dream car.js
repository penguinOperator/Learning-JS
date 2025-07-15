const car = {
    model: "Penguin",
    year: 2025,
    color: "blue",
    used: false
};


console.log(
    "I'm looking for a " +
    car.year + " " +
    car.model + " that is " +
    car.color + " " +
    "and " + (car.used ? "used" : "new")
);
