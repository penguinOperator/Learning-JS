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
    let length = viewsArray.length
    sortedStats.sort((a, b) => a - b);

    if (viewsArray.length % 2 === 0) {
        console.log("even")
    } else {
        console.log("odd")
    }
}

median(recentTikTokViews);
median(recentYouTubeViews);
median(recentInstagramViews);

mean(recentTikTokViews);
mean(recentYouTubeViews);
mean(recentInstagramViews);
