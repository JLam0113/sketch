function createGrid(size){
    let ratio = 1/size;
    const container = document.querySelector('.container');
    container.innerHTML = '';
    const grid = '<div class="grid" style="flex-basis:' + ratio*100 +'%" onclick="change(this)"></div>';
    for(let i = 0; i < (size*size); i++){
        container.innerHTML += grid;
    }
}

function userPrompt(){
    let size = prompt("Enter your grid size (Max 100)");
    if (isNumeric(size)){
        if(size < 101)
        createGrid(Math.round(size));
        else userPrompt();
    }
    
}

function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }

function change(square){
    square.style.background = "purple";
}

createGrid(16);