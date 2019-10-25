console.log("You're not an idiot... You're a Crippled Nincompoop."); //working
/* 
Create an HTML page that contains a text area and a button labeled Create.
When the user enters in text into the text area and then clicks the create button, 
use a factory function that creates a new DOM component that has a border, 
and includes it's own delete button.
 */

// Define 'create' button event handler
const createButtonHandler = () => {
    // console.log("Create button was clicked");
}

// create textArea element
// grab a reference to the container the element will go in
let formElement = document.querySelector("#cardInputContainer")

// create individual components using .createElement()
let textArea = document.createElement("textArea")
textArea.rows = 20;
textArea.cols = 50;
textArea.id = "input-cardtext"
console.log(textArea)

// use appendChild() to add these to container
// adds textArea
formElement.appendChild(textArea)

// create "create" button
let buttonElement = document.createElement("button")
// name the button "create"
buttonElement.textContent = "create"
// give button id
buttonElement.id = "create-button"
console.log("button", buttonElement);

// add 'create' button to DOM
formElement.appendChild(buttonElement)
// add future eventLisenter to 'create button
buttonElement.addEventListener("click", createButtonHandler)
// ice, ice icicle... bike bike bicycle... test test... test 1 2 (copyright: matthew skinner)
console.log("formElement", formElement)

/* 
Insert that new component into the DOM.
 */


/* 
When the user clicks the Delete button, the containing card, and no other cards, 
should then be removed from the DOM. Not just made invisible, actually removed from the DOM.
 */


/* 
Pro tip: The card's id attribute, and the button's id attribute should share some common value. 
Then, when the button is clicked, find the corresponding parent DOM component. 
Remember the split() method on a string? That will be helpful.
 */


/* GOAL html below
<article class="card" id="card--1">
<div>Hey, I entered some text</div>
<div>
    <button id="delete--1">Delete This Card</button>
</div>
</article>

<article class="card" id="card--2">
<div>Hey, I entered some text</div>
<div>
    <button id="delete--2">Delete This Card</button>
</div>
</article>
 */