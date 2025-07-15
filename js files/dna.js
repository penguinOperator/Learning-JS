






















const dnaPieces = ["A", "C", "G", "T"];
const indexFinds = [];

for (let i = 0; i < 24; i++) {
    let indexFind = "";
    for (let j = 0; j < 3; j++) {
        let randomIndex = Math.floor(Math.random() * dnaPieces.length);
        indexFind += dnaPieces[randomIndex];
    }
    indexFinds.push(indexFind);
}

console.log(indexFinds);
