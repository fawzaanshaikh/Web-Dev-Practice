// This is the practice JavaScript file

// Everything related to Operators, Variables, etc. are the same as other languages
// Datatypes -> number, string, boolean, symbol, float, ...


function avg(a, b) {
    return (a + b) / 2;
}

c = avg(2, 3);

console.log(c);

// Working with arrays
var arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach(function(element) {
    console.log(element);   // This will print out all the elements of the array
});

let j = 0; // let is a block-level variable allocation keyword. This helps in memory management as it is not retained after the scope is over.

arr.push("something"); // push() method pushes an element to the end of the array
arr.pop(); // pop() method removes the last element of the array


// Dates
let myDate = new Date(); // getTime, getFullYear, getMinutes, getHours, getDay

// DOM Manipulation
let elemClass = document.getElementsByClassName("div-container");
// elemClass[0].classList.add("bg-change-blue");

let selectedFromQuery = document.querySelector(".div-container");
// querySelector, querySelectorAll selects from the specified type of class or id and is mainly used for CSS

// The DOM tree structure can use functions to add, modify and delete the child elements using: 
// createElement, appendChild, replaceChild, removeChild
var addChild = document.createElement('p');
addChild.innerHTML = "This is an added para";
elemClass[0].appendChild(addChild);

