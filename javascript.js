// Click Event

const boxElement = document.getElementById("box");

// add a click event listener to the element
boxElement.addEventListener("click", function () {
  alert("you just clicked me 👍");
});

// doubleClick event

const boxElement1 = document.getElementById("box1");

// adding a dblclick event listener to the element
boxElement1.addEventListener("dblclick", function () {
  alert("doubleClick event ");
});

// Mouse Over

const boxElement2 = document.getElementById("box2");

// add a mouseover event listener to the element
boxElement2.addEventListener("mouseover", function () {
  alert(
    "you entered in Restricted Area"
  );
});

// Mouse out

const boxElement3 = document.getElementById("box3");

// add a mouseout event listener to the element
boxElement3.addEventListener("mouseout", function () {
  alert("you left the safe zone");
});

// Onkeypress

let inputBox = document.getElementById('input-box') 
let display = document.getElementById('display')


// // adding a keypress event listener to the inputbox
inputBox.addEventListener('keypress', function(e){
    display.innerText ="You have pressed " + e.key
})

// Keydown-Keyup

let container1 = document.getElementById("container1");
let display1 = document.getElementById("display1");

// adding a keydown event listener to the document
document.addEventListener("keydown", function (e) {
  display.style.color = "red";
  display.innerText = e.key + " is keyDown";
});

// adding a keyup event listener to the document
document.addEventListener("keyup", function (e) {
  display.style.color = "green";
  display.innerText = e.key + " is keyUp";
});






// getting the html elements
const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue");

// decrement button click
decrementBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  if (value > 0) {
    displayValue.innerText = value - 1;
  } else {
    alert("Negative value not allowed");
  }
});

// increment button click
incrementBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  if (value >= 10) {
    alert("10+ values are not allowed");
  } else {
    displayValue.innerText = value + 1;
  }
});

// reset button click
resetBtn.addEventListener("click", () => {
  displayValue.innerText = 0;
});