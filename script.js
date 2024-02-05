"use strict"

window.addEventListener("DOMContentLoaded", start)

//Global variables
let globalList = [1, 3, 4, 7, 8, 13, 19]

function start() {
    console.log("Javascript is running")
    console.log("" + binarySearch(globalList, 19));
}


function binarySearch(listIn, number, offset = 0) {
    let maxIndex = listIn.length;
    let median = Math.floor(maxIndex / 2)

    if (number === listIn.at(median) ){
        let result = median + offset;
        return result;
    }

    if (number < listIn.at(median)) {
        let newList = listIn.slice(0, median);
        
        return binarySearch(newList, number, offset);
    }

    if (number > listIn.at(median)) {
        let newList = listIn.slice(median + 1)
        return binarySearch(newList, number, median + offset + 1);
    }

    return -1
}