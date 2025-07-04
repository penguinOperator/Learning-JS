const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];

function mean(viewsArray) {
    let total = 0
    for (let i = 0; i < viewsArray.length; i++) {
        total = total + viewsArray[i]
    }
    let clout = total / viewsArray.length
    console.log(clout)
}

function median(viewsArray) {
    let sorted = [...viewsArray].sort((a, b) => a - b); //copies the array selected later on outside of the function. sorts it from smallest to biggest

    let length = sorted.length; //define length as the copied sorted array and gets the length
    let middle = Math.floor(length / 2); //ddefine middle as round down the number so it wont have decimal, and devide length by 2 to get the middle

    if (length % 2 === 0) { //if length is dividable by 2 and no decimal
        // even: average of two middle values
        let medianValue = (sorted[middle - 1] + sorted[middle]) / 2;
        console.log("Median (even):", medianValue);
    } else {
        // odd: middle value
        let medianValue = sorted[middle];
        console.log("Median (odd):", medianValue);
    }
}

median(recentTikTokViews);
console.log("Mean: " + mean(recentTikTokViews))
