
const container = document.querySelector('#container');
let size = 20;


// creat grid 
let creatGrid=(size)=> {
    
    container.style.gridTemplateRows = `repeat(${size},1fr)`;
    container.style.gridTemplateColumns = `repeat(${size},1fr)`;
    for (let i = 0; i < Math.pow(size,2); i++) {
      let cells = document.createElement("div");
      container.appendChild(cells).className = "grid-item";
  
    };

  };
  creatGrid(size);

/********************************************** */

// asking the user to enter the number of grids :-

let NumberOfGrids = document.querySelector(".new-btn");
NumberOfGrids.addEventListener("click",()=>{
    let number = prompt("Please enter number of grids :)" , "17");
    number = parseInt(number);
    if( isNaN(number) || number <= 0) {
        alert("Please enter a valid number !!!");
        creatGrid(16);
        clear() ;
    } else {
        creatGrid(number);
        clear();
    }
})


/****************************************** */

// Changing the background color :-

let randomButton = document.querySelector(".random-btn");

randomButton.addEventListener("click",()=>{
    // this function for random color 
    const cells = document.querySelectorAll('.grid-item');
    cells.forEach( (element) => {
        // function loop on each cell
        element.addEventListener("mouseover",()=>{
            // function works after hovering  the cells
            element.style.backgroundColor = RandomColors();
        });
    });
});

/*********** */

//a function to chose a random color

/*
function RandomColors(){
    let colorArray = [] ;
    for(let i = 0 ; i < 3 ; i++ ){
        colorArray.push(Math.floor(Math.random() * (255 - 0) ));
    }

    // rgb -> hex
    let color = colorArray
    .map(x => x.toString(16))
    .join('');

  return `#${color}`;

}
*/
  // update above function
const RandomColors = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}
    

/****************************************************************** */
/****************************************************************** */

//clear button
var clearButton = document.querySelector(".clear-btn");

clearButton.addEventListener("click", clear) ;

// clear function
function clear(){
    const cell = document.querySelectorAll(".grid-item");
    cell.forEach(element => {
        element.style.backgroundColor ="white";
    });
}

/****************************************************************** */

//choose color
var theInput = document.getElementById("element");
theInput.addEventListener("input", choseColor); 

 function choseColor(event) {
  const cell = document.querySelectorAll(".grid-item");
  cell.forEach(element => {
    element.addEventListener("mouseover",  ()=> {
      element.style.backgroundColor =  event.target.value;
    });
  });
}



