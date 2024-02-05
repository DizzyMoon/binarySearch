"use strict"
window.addEventListener("DOMContentLoaded", start)

//Global variables
let globalList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    , 11, 12, 13, 14, 15, 16, 17, 18, 19,
     21, 22, 23, 24, 25, 26, 27, 28, 29,
      30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
       40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        51, 52, 53, 54, 55, 56, 57, 58, 59,
         60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
          70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
           80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
            90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

function start() {
    console.log("Javascript is running")
}

function buttonClicked(event){
    //Prevent refresh
    event.preventDefault();

    //Add HTML elements
    const answerContainer = document.querySelector("#answer-container")
    const number = parseInt(document.querySelector("#number-input").value, 10);
    let answerElement = document.querySelector(".answer");
    
    // Find number
    let answer = binarySearchRecursive(globalList, number);
    console.log("" + answer);

    // Handle if answer does not exist in list
    if (answer === -1){
        answerElement.innerHTML = "The given number does not exist in the list";
    } else {
        answerElement.innerHTML = `The given number is at index: ${answer}`;
    }
}

// Recursive binary search
function binarySearchRecursive(listIn, number, offset = 0) {
    let maxIndex = listIn.length;
    let median = Math.floor(maxIndex / 2)

    if (number === listIn.at(median) ){
        return median + offset;
    }

    if (number < listIn.at(median)) {
        let newList = listIn.slice(0, median);
        return binarySearchRecursive(newList, number, offset);
    }
    
    if (number > listIn.at(median)) {
        let newList = listIn.slice(median + 1)
        return binarySearchRecursive(newList, number, median + offset + 1);
    }

    return -1;
}