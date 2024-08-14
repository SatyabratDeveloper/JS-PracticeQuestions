/*
    Question: Pyramid Generator
    
    Example:    #   
               ###
              #####
             #######
    
*/

const character = "#";
const numberOfRows = 8;
const pyramidArr = [];
let pyramid = "";
let inverted = true;

function padRow(currRow, totalRows) {
    return (
        " ".repeat(totalRows - currRow) +
        character.repeat(2 * currRow - 1) +
        " ".repeat(totalRows - currRow)
    );
}

for (let i = 1; i <= numberOfRows; i++) {
    if (inverted) {
        pyramidArr.unshift(padRow(i, numberOfRows));
    } else {
        pyramidArr.push(padRow(i, numberOfRows));
    }
}

for (const row of pyramidArr) {
    pyramid = pyramid + "\n" + row;
}

console.log(pyramid);
