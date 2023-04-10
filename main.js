var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var Randomize = document.getElementById("Randomize");
var Solve = document.getElementById("Solve");
var container = document.getElementById("bars");
output.innerHTML = slider.value; // Display the default slider value

function generatearray(valueOfSlider) {
    for (var i = 0; i < valueOfSlider; i++) {
  
        // Return a value from 1 to 100 (both inclusive)
        var value = Math.ceil(Math.random() * 100);
  
        // Creating element div
        var array_ele = document.createElement("div");
  
        // Adding class 'block' to div
        array_ele.classList.add("block");
  
        // Adding style to div
        array_ele.style.height = (`${value * 3}px`);
        array_ele.style.transform = (`translate(${i * 30}px)`)
  
        // Creating label element for displaying 
        // size of particular block
        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.innerText = value;
  
        // Appending created elements to index.html 
        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);
    }
}



// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
Randomize.onclick = function(){
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      }
     

    generatearray( slider.value)
}

Solve.onclick = function(){
    bblSort()
}
// Bubble sort Implementation using Javascript
  
// Creating the bblSort function
async function bblSort(delay=150){
    var blocks = document.querySelectorAll(".block");
    for (var i = 0; i < blocks.length; i++) {
  
        // Last i elements are already in place  
        for (var j = 0; j < (blocks.length - i - 1); j++) {
            blocks[j].style.backgroundColor = "#FF4949";
            blocks[j + 1].style.backgroundColor = "#FF4949";

              
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
            );
            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (blocks[j].childNodes[0].innerHTML > blocks[j + 1].childNodes[0].innerHTML) {
               
                // If the condition is true
                // then swap them
                await swap(blocks[j],blocks[j + 1])
                blocks = document.querySelectorAll(".block");
            }
                blocks[j].style.backgroundColor = "#6b5b95";
                blocks[j + 1].style.backgroundColor = "#6b5b95";
        }
    }
 
}
function swap(el1, el2) {
    return new Promise((resolve) => {
  
        // For exchanging styles of two blocks
        var temp = el1.style.transform;
        el1.style.transform = el2.style.transform;
        el2.style.transform = temp;
  
        window.requestAnimationFrame(function() {
  
            // For waiting for .25 sec
            setTimeout(() => {
                container.insertBefore(el2, el1);
                resolve();
            }, 250);
        });
    });
}

