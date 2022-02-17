// This is the practice JavaScript file

// Everything related to Operators, Variables, etc. are the same as other languages
// Datatypes -> number, string, boolean, symbol, float, ...

// To make the code follow more rules, we can write "use strict"; at the start of our JS code.

/* -------------------------------------------- */
function avg(a, b) {
    return (a + b) / 2;
}

c = avg(2, 3);

// console.log(c);

/* -------------------------------------------- */
// Objects
let obj = {
    r: 10,
    g: 20,
    b: 30,
    func: function() {
        console.log("This is a function wihtin the object");
    }
};

// Properties within the object can be accessed using:
// console.log(obj.func);

/* -------------------------------------------- */
// Working with arrays
var arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach(function(element) {
    // console.log(element);   // This will print out all the elements of the array
});

let j = 0; // let is a block-level variable allocation keyword. This helps in memory management as it is not retained after the scope is over.

arr.push("something"); // push() method pushes an element to the end of the array
arr.pop(); // pop() method removes the last element of the array

/* -------------------------------------------- */
// Dates
let myDate = new Date(); // getTime, getFullYear, getMinutes, getHours, getDay

/* -------------------------------------------- */
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

/* -------------------------------------------- */
// Events in JavaScript
function clicked() {
    formDiv = document.getElementById("form");
    let clickedConfirmation = document.createElement("p");
    clickedConfirmation.innerHTML = "Thank you for clicking me";
    formDiv.appendChild(clickedConfirmation);

    let conf = confirm("Are you sure?"); // confirm returns a true/ false value based on user response
    if (conf) console.log("Okay.");
    else console.log("Nokay.");
}

elemClass[0].addEventListener("click", function() {
    console.log("The div container was clicked.");
    var addChild = document.createElement('p');
    addChild.innerHTML = "The div container was clicked";
    elemClass[0].appendChild(addChild);
})

/* -------------------------------------------- */
// setTimeout and setInterval
setTimeout(function() { // setTimeout does the work after the specified time
    console.log("I am displayed after 3 seconds or 3000 milliseconds");
}, 3000); // To cancel a setTimeout, you can use clearTimeout() and pass in the value that is returned from setTimeout as shown below

let iteration = 0;

clr = setInterval(function() {  // setInterval keeps iterating per amount of time given
    var addChild = document.createElement('p');
    addChild.innerHTML = "I am added: " + iteration++ + " After every two seconds";
    elemClass[0].appendChild(addChild);

    if (iteration === 5) clearInterval(clr);    // Stops the running setInterval
}, 2000);

/* -------------------------------------------- */
// localStorage in JavaScript
// localStorage.setItem("name", "Fawzaan");
// localStorage;
// localStorage.getItem("name");
// localStorage.removeItem("name");
// localStorage.clear();

/* -------------------------------------------- */
// To convert JS object to JSON format:
obj = {id: "101", firstName: "Fawzaan", length: 7};
jsonString = JSON.stringify(obj);
console.log(jsonString);
console.log(typeof jsonString);

// For parsing
parsed = JSON.parse(`{"id": "101", "firstName": "Fawzaan", "length": 7}`);
console.log(parsed);

/* -------------------------------------------- */
// Template literals - Backticks
a = 34;
console.log(`Here, a is ${a}`); 