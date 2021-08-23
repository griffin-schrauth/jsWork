const boxes = Array.from(document.getElementsByClassName('box'));
//const buttons = Array.from(document.getElementsByClassName('col'));
console.log(boxes);
//console.log(buttons);

const playText = document.getElementById('playText');
const restartBtn = document.getElementById('restartBtn');
const spaces = [];
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer;
var count = 0


const drawBoard = () => {
    boxes.forEach((box,index) => {
        let styleString = '';
        if(index >= 0) {
            styleString += 'border-bottom: 3px solid var(--purple);';
        
            styleString += 'border-right: 3px solid var(--purple);';
        
            styleString += 'border-left: 3px solid var(--purple);';
        
            styleString += 'border-top: 3px solid var(--purple);';
        }
        box.style = styleString;
        box.addEventListener('click',boxClicked)
        
    });
};

const boxClicked = (e) => {
    console.log('box clicked');
}

document.getElementById("col1").addEventListener("click", function() {
    console.log("button 1");
    
    if (count == 0) {
        boxes[35].innerText = currentPlayer;
        currentPlayer = currentPlayer == O_TEXT ? X_TEXT : O_TEXT;
        count = count + 1;
    } else if (count == 1){
        boxes[28].innerText = currentPlayer;
        currentPlayer = currentPlayer == O_TEXT ? X_TEXT : O_TEXT;
        count = count + 1;
    }
    
    //box [0,7,14,21,28,35] indexes for this column
});
document.getElementById("col2").addEventListener("click", function() {
    console.log("button 2");
    boxes[36].innerText = currentPlayer;
    //box [1,8,15,22,29,36] indexes for this column
});
document.getElementById("col3").addEventListener("click", function() {
    console.log("button 3");
    //box [2,9,16,23,30,37] indexes for this column
});
document.getElementById("col4").addEventListener("click", function() {
    console.log("button 4");
    //box [3,10,17,24,31,38] indexes for this column
});
document.getElementById("col5").addEventListener("click", function() {
    console.log("button 5");
    //box [4,11,18,25,32,39] indexes for this column
});
document.getElementById("col6").addEventListener("click", function() {
    console.log("button 6");
    //box [5,12,19,26,33,40] indexes for this column
});
document.getElementById("col7").addEventListener("click", function() {
    console.log("button 7");
    //box [6,13,20,27,34,41] indexes for this column
});




/*
const gboard = () => {
    buttons.forEach((col,index) => {
        
        col.addEventListener('click', buttonClicked);
        
    });
};

const buttonClicked = (event) => {
    console.log('Button was clicked')
}
*/

const restart = () => {
    spaces.forEach((space,index) => {
        spaces[index] = null; 
    })
    boxes.forEach(box => {
        box.innerText = '';
    })
    playText.innerText = `Let's Play!`;
    currentPlayer = O_TEXT;
    count = 0;
}


restartBtn.addEventListener('click', restart);
restart();

drawBoard();