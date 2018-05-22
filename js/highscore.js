console.log('highscore.js is loading properly');
'use strict';
/* exported clearHighScoresArray */



// bring in the player name and scores array
let highScoresArray = [
    { name: "John", score: 125 },
    { name: "Kathy", score: 500 },
    { name: "Kenneth", score: 375 }
];

console.log('highScoresArray prior to sort: ', highScoresArray);

// sort array on score (high to low)



var bubbleSort = function(highScoresArray, score) {
    let swapped = true;
    while(swapped === true) {
        swapped = false;
        for(let i = 1; i < highScoresArray.length; i++) {
            if(highScoresArray[i - 1].score < highScoresArray[i].score) {
                let temp;
                temp = highScoresArray[i];
                highScoresArray[i] = highScoresArray[i - 1];
                highScoresArray[i - 1] = temp;
                swapped = true;
            }
        }
    }
    return highScoresArray;
};

highScoresArray = bubbleSort(highScoresArray, this.score);
console.log(highScoresArray);

// render array items to table
const parent = document.getElementsByTagName('tbody');

for(var i = 0; i < highScoresArray.length; i++) {
    document.createElement('tr');
    let child1 = document.createElement('td');
    child1.textContent = highScoresArray[i].playerName;
    parent.appendChild(child1);
    let child2 = document.createElement('td');
    child1.textContent = highScoresArray[i].score;
    parent.appendChild(child2);
}

//reset high-scores function
let clearHighScoresArray = function(){
    highScoresArray = 0;
};
