// Select the button we have in the `index.html`
const button = document.querySelector("#myFirstDiv");

// console.log("I have selected the button. I will print it below...");
// console.log(button);
let count = 0;

// Add a event listener on it
const eventType = "click";
function eventHandler() {
  button.style = "visibility: hidden";
}
button.addEventListener(eventType, eventHandler);
