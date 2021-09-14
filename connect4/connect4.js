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
var count1 = 0
var count2 = 0
var count3 = 0
var count4 = 0
var count5 = 0
var count6 = 0
var count7 = 0



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
    if (count1 == 0) {
        boxes[35].innerText = currentPlayer;
        count1 = count1 + 1;
    } else if (count1 == 1){
        boxes[28].innerText = currentPlayer;
        count1 = count1 + 1;
    } else if (count1 == 2){
        boxes[21].innerText = currentPlayer;
        count1 = count1 + 1;
    } else if (count1 == 3){
        boxes[14].innerText = currentPlayer;
        count1 = count1 + 1;
    } else if (count1 == 4){
        boxes[7].innerText = currentPlayer;
        count1 = count1 + 1;
    } else if (count1 == 5){
        boxes[0].innerText = currentPlayer;
        count1 = count1 + 1;
    }
    console.log(`${currentPlayer} `)
    if(check()){
        playText.innerText = `${currentPlayer} has won`;
        return;
    }
    currentPlayer = currentPlayer == O_TEXT ? X_TEXT : O_TEXT;
    //box [0,7,14,21,28,35] indexes for this column
    
});
document.getElementById("col2").addEventListener("click", function() {
    console.log("button 2");
    if (count2 == 0) {
        boxes[36].innerText = currentPlayer;
        count2 = count2 + 1;
    } else if (count2 == 1){
        boxes[29].innerText = currentPlayer;
        count2 = count2 + 1;
    } else if (count2 == 2){
        boxes[22].innerText = currentPlayer;
        count2 = count2 + 1;
    } else if (count2 == 3){
        boxes[15].innerText = currentPlayer;
        count2 = count2 + 1;
    } else if (count2 == 4){
        boxes[8].innerText = currentPlayer;
        count2 = count2 + 1;
    } else if (count2 == 5){
        boxes[1].innerText = currentPlayer;
        count2 = count2 + 1;
    }
    console.log(`${currentPlayer} `)
    if(check()){
        playText.innerText = `${currentPlayer} has won`;
        return;
    }
    
    currentPlayer = currentPlayer == O_TEXT ? X_TEXT : O_TEXT;
    //box [1,8,15,22,29,36] indexes for this column
    
});
document.getElementById("col3").addEventListener("click", function() {
    console.log("button 3");
    if (count3 == 0) {
        boxes[37].innerText = currentPlayer;
        count3 = count3 + 1;
    } else if (count3 == 1){
        boxes[30].innerText = currentPlayer;
        count3 = count3 + 1;
    } else if (count3 == 2){
        boxes[23].innerText = currentPlayer;
        count3 = count3 + 1;
    } else if (count3 == 3){
        boxes[16].innerText = currentPlayer;
        count3 = count3 + 1;
    } else if (count3 == 4){
        boxes[9].innerText = currentPlayer;
        count3 = count3 + 1;
    } else if (count3 == 5){
        boxes[2].innerText = currentPlayer;
        count3 = count3 + 1;
    }
    console.log(`${currentPlayer} `)
    if(check()){
        playText.innerText = `${currentPlayer} has won`;
        return;
    }
    currentPlayer = currentPlayer == O_TEXT ? X_TEXT : O_TEXT;
    //box [2,9,16,23,30,37] indexes for this column
    
});
document.getElementById("col4").addEventListener("click", function() {
    console.log("button 4");
    if (count4 == 0) {
        boxes[38].innerText = currentPlayer;
        count4 = count4 + 1;
    } else if (count4 == 1){
        boxes[31].innerText = currentPlayer;
        count4 = count4 + 1;
    } else if (count4 == 2){
        boxes[24].innerText = currentPlayer;
        count4 = count4 + 1;
    } else if (count4 == 3){
        boxes[17].innerText = currentPlayer;
        count4 = count4 + 1;
    } else if (count4 == 4){
        boxes[10].innerText = currentPlayer;
        count4 = count4 + 1;
    } else if (count4 == 5){
        boxes[3].innerText = currentPlayer;
        count4 = count4 + 1;
    }
    console.log(`${currentPlayer} `)
    if(check()){
        playText.innerText = `${currentPlayer} has won`;
        return;
    }
    currentPlayer = currentPlayer == O_TEXT ? X_TEXT : O_TEXT;
    //box [3,10,17,24,31,38] indexes for this column
    
});
document.getElementById("col5").addEventListener("click", function() {
    console.log("button 5");
    if (count5 == 0) {
        boxes[39].innerText = currentPlayer;
        count5 = count5 + 1;
    } else if (count5 == 1){
        boxes[32].innerText = currentPlayer;
        count5 = count5 + 1;
    } else if (count5 == 2){
        boxes[25].innerText = currentPlayer;
        count5 = count5 + 1;
    } else if (count5 == 3){
        boxes[18].innerText = currentPlayer;
        count5 = count5 + 1;
    } else if (count5 == 4){
        boxes[11].innerText = currentPlayer;
        count5 = count5 + 1;
    } else if (count5 == 5){
        boxes[4].innerText = currentPlayer;
        count5 = count5 + 1;
    }
    console.log(`${currentPlayer} `)
    if(check()){
        playText.innerText = `${currentPlayer} has won`;
        return;
    }
    currentPlayer = currentPlayer == O_TEXT ? X_TEXT : O_TEXT;
    //box [4,11,18,25,32,39] indexes for this column
   
});
document.getElementById("col6").addEventListener("click", function() {
    console.log("button 6");
    if (count6 == 0) {
        boxes[40].innerText = currentPlayer;
        count6 = count6 + 1;
    } else if (count6 == 1){
        boxes[33].innerText = currentPlayer;
        count6 = count6 + 1;
    } else if (count6 == 2){
        boxes[26].innerText = currentPlayer;
        count6 = count6 + 1;
    } else if (count6 == 3){
        boxes[19].innerText = currentPlayer;
        count6 = count6 + 1;
    } else if (count6 == 4){
        boxes[12].innerText = currentPlayer;
        count6 = count6 + 1;
    } else if (count6 == 5){
        boxes[5].innerText = currentPlayer;
        count6 = count6 + 1;
    }
    console.log(`${currentPlayer} `)
    if(check()){
        playText.innerText = `${currentPlayer} has won`;
        return;
    }
    currentPlayer = currentPlayer == O_TEXT ? X_TEXT : O_TEXT;
    //box [5,12,19,26,33,40] indexes for this column
    
});
document.getElementById("col7").addEventListener("click", function() {
    console.log("button 7");
    if (count7 == 0) {
        boxes[41].innerText = currentPlayer;
        count7 = count7 + 1;

    } else if (count7 == 1){
        boxes[34].innerText = currentPlayer;
        count7 = count7 + 1;

    } else if (count7 == 2){
        boxes[27].innerText = currentPlayer;
        count7 = count7 + 1;

    } else if (count7 == 3){
        boxes[20].innerText = currentPlayer;
        count7 = count7 + 1;

    } else if (count7 == 4){
        boxes[13].innerText = currentPlayer;
        count7 = count7 + 1;

    } else if (count7 == 5){
        boxes[6].innerText = currentPlayer;
        //console.log(`${currentPlayer} `)
        count7 = count7 + 1;
        
    }
    console.log(`${currentPlayer} `)
    if(check()){
        playText.innerText = `${currentPlayer} has won`;
        return;
    }
    currentPlayer = currentPlayer == O_TEXT ? X_TEXT : O_TEXT;
    

    //box [6,13,20,27,34,41] indexes for this column
});


const check = () => {
    for( let i = 41; i >= 0; i--){
        if(boxes[i].innerText == currentPlayer){
            if(boxes[i - 1].innerText == currentPlayer && boxes[i - 2].innerText == currentPlayer && boxes[i - 3].innerText == currentPlayer){
                console.log(`${currentPlayer} wins on the bottom`)
                return true;
            }
            if(boxes[i - 8].innerText == currentPlayer && boxes[i - 16].innerText == currentPlayer && boxes[i - 24].innerText == currentPlayer){
                console.log(`${currentPlayer} wins diagonally`)
                return true;
            }
            if(boxes[i - 7].innerText == currentPlayer && boxes[i - 14].innerText == currentPlayer && boxes[i - 21].innerText == currentPlayer){
                console.log(`${currentPlayer} wins on the bottom right`)
                return true;
            }
        }
    }
};

const restart = () => {
    spaces.forEach((space,index) => {
        spaces[index] = null; 
    })
    boxes.forEach(box => {
        box.innerText = '';
    })
    playText.innerText = `Let's Play!`;
    currentPlayer = O_TEXT;
    count1 = 0;
    count2 = 0
    count3 = 0
    count4 = 0
    count5 = 0
    count6 = 0
    count7 = 0
};


restartBtn.addEventListener('click', restart);
restart();

drawBoard();