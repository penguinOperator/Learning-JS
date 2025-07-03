const musicPlaylist = [
    "Tom Sawyer",
    "Sabotage",
    "I Wanna Dance With Somebody",
    "Don't Speak",
    "Bulls On Parade",
    "Thriller",
    "The Breaks",
    "Brick",
    "Aeroplane Over the Sea",
    "Tubthumping"
];

const remove1 = musicPlaylist.pop();
const remove2 = musicPlaylist.shift();

let newValue = "abc"
let newValue2 = "abcd"

const add1 = musicPlaylist.push(newValue);
const add2 = musicPlaylist.unshift(newValue2);

console.log(musicPlaylist)


//Add one new element to end of the array.
//Add two new elements to the beginning of the array.