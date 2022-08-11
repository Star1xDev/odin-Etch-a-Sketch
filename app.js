// get container reference and height and width
const containerDiv = document.querySelector(".container");
const containerWidth = containerDiv.offsetWidth;
const containerHeight = containerDiv.offsetHeight;

// number of div per side for the grid
let gridNumber = 16;

// calculate the width and height for the divs
let squareWidth = containerWidth / gridNumber;
let squareHeight = containerHeight / gridNumber;

// function to  create square divs with the height and width from before and appending to container //
function createGrid(gridNumber){
  let i = 0;
  while (i < gridNumber * gridNumber) {
    let squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    squareDiv.style.width = squareWidth + "px";
    squareDiv.style.height = squareHeight + "px";
    containerDiv.appendChild(squareDiv);
    i++;
  }
}

createGrid(gridNumber);

// change background color when mouseover
containerDiv.addEventListener("mouseover", (e) =>{
    if (e.target.classList.contains("square")) {
      e.target.style.backgroundColor = "purple";
    }
})




