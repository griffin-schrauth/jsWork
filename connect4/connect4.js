const boxes = Array.from(document.getElementsByClassName('box'));

console.log(boxes);


const playText = document.getElementById('playText');
const restartBtn = document.getElementById('restartBtn');
const spaces = [];
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer;


const drawBoard = () => {
    boxes.forEach((box,index) => {
        let styleString = '';
        if(index >= 0) {
            styleString += 'border-bottom: 3px solid var(--blue);';
        
            styleString += 'border-right: 3px solid var(--blue);';
        
            styleString += 'border-left: 3px solid var(--blue);';
        
            styleString += 'border-top: 3px solid var(--blue);';
        }
        box.style = styleString;
        
        
    });
};


document.getElementById("col1").addEventListener("click", function() {
    console.log("button 1");
    for (var i = 35; i >= 0; i -= 7){
        if(boxes[i].innerText == "X" || boxes[i].innerText == "O" ){
        
            continue;
        } else{
            boxes[i].innerText = currentPlayer;
            if(check()){
                playText.innerText = `${currentPlayer} has won`;
                return;
            }
            currentPlayer = currentPlayer == O_TEXT ? X_TEXT : O_TEXT;
            break;
        }
    }
    
    //box [0,7,14,21,28,35] indexes for this column
    
});
document.getElementById("col2").addEventListener("click", function() {
    console.log("button 2");
    for (var i = 36; i >= 1; i -= 7){
        if(boxes[i].innerText == "X" || boxes[i].innerText == "O" ){
            console.log("box is already filled")
            continue;
        } else{
            boxes[i].innerText = currentPlayer;
            if(check()){
                playText.innerText = `${currentPlayer} has won`;
                return;
            }
            currentPlayer = currentPlayer == O_TEXT ? X_TEXT : O_TEXT;
            break;
        }
    }
    
    //box [1,8,15,22,29,36] indexes for this column
    
});
document.getElementById("col3").addEventListener("click", function() {
    console.log("button 3");
    for (var i = 37; i >= 2; i -= 7){
        if(boxes[i].innerText == "X" || boxes[i].innerText == "O" ){
            
            continue;
        } else{
            boxes[i].innerText = currentPlayer;
            if(check()){
                playText.innerText = `${currentPlayer} has won`;
                return;
            }
            currentPlayer = currentPlayer == O_TEXT ? X_TEXT : O_TEXT;
            break;
        }
    }
   
    //box [2,9,16,23,30,37] indexes for this column
    
});
document.getElementById("col4").addEventListener("click", function() {
    console.log("button 4");
    for (var i = 38; i >= 3; i -= 7){
        if(boxes[i].innerText == "X" || boxes[i].innerText == "O" ){
            
            continue;
        } else{
            boxes[i].innerText = currentPlayer;
            if(check()){
                playText.innerText = `${currentPlayer} has won`;
                return;
            }
            currentPlayer = currentPlayer == O_TEXT ? X_TEXT : O_TEXT;
            break;
        }
    }
    
    
    //box [3,10,17,24,31,38] indexes for this column
    
});
document.getElementById("col5").addEventListener("click", function() {
    console.log("button 5");
    for (var i = 39; i >= 4; i -= 7){
        if(boxes[i].innerText == "X" || boxes[i].innerText == "O" ){
            
            continue;
        } else{
            boxes[i].innerText = currentPlayer;
            if(check()){
                playText.innerText = `${currentPlayer} has won`;
                return;
            }
            currentPlayer = currentPlayer == O_TEXT ? X_TEXT : O_TEXT;
            break;
        }
    }
    
    //box [4,11,18,25,32,39] indexes for this column
   
});
document.getElementById("col6").addEventListener("click", function() {
    console.log("button 6");
    for (var i = 40; i >= 5; i -= 7){
        if(boxes[i].innerText == "X" || boxes[i].innerText == "O" ){
            
            continue;
        } else{
            boxes[i].innerText = currentPlayer;
            if(check()){
                playText.innerText = `${currentPlayer} has won`;
                return;
            }
            currentPlayer = currentPlayer == O_TEXT ? X_TEXT : O_TEXT;
            break;
        }
    }

    //box [5,12,19,26,33,40] indexes for this column
    
});
document.getElementById("col7").addEventListener("click", function() {
    console.log("button 7");
    for (var i = 41; i >= 6; i -= 7){
        if(boxes[i].innerText == "X" || boxes[i].innerText == "O" ){
            
            continue;
        } else{
            boxes[i].innerText = currentPlayer;
            if(check()){
                playText.innerText = `${currentPlayer} has won`;
                return;
            }
            currentPlayer = currentPlayer == O_TEXT ? X_TEXT : O_TEXT;
            break;
        }
    }
   
    //box [6,13,20,27,34,41] indexes for this column
});

// will check each box for winner
const check = () => {//check the bottom three rows and all combos first
    for(var i = 41; i >= 27; i-= 7){
        if(boxes[i].innerText == currentPlayer){
            if(boxes[i - 1].innerText == currentPlayer && boxes[i - 2].innerText == currentPlayer && boxes[i - 3].innerText == currentPlayer){
                
                
                return true;
            }
            if(boxes[i - 8].innerText == currentPlayer && boxes[i - 16].innerText == currentPlayer && boxes[i - 24].innerText == currentPlayer){
                
                return true;
            }
            if(boxes[i - 7].innerText == currentPlayer && boxes[i - 14].innerText == currentPlayer && boxes[i - 21].innerText == currentPlayer){
                
                return true;
            }
        }
    }
    for( i = 40; i >= 26; i-= 7){
        if(boxes[i].innerText == currentPlayer){
            if(boxes[i - 1].innerText == currentPlayer && boxes[i - 2].innerText == currentPlayer && boxes[i - 3].innerText == currentPlayer){
                
                return true;
            }
            if(boxes[i - 8].innerText == currentPlayer && boxes[i - 16].innerText == currentPlayer && boxes[i - 24].innerText == currentPlayer){
                
                return true;
            }
            if(boxes[i - 7].innerText == currentPlayer && boxes[i - 14].innerText == currentPlayer && boxes[i - 21].innerText == currentPlayer){
                
                return true;
            }
        }
    }
    for( i = 39; i >= 25; i-= 7){
        if(boxes[i].innerText == currentPlayer){
            if(boxes[i - 1].innerText == currentPlayer && boxes[i - 2].innerText == currentPlayer && boxes[i - 3].innerText == currentPlayer){       
                return true;
            }
            if(boxes[i - 8].innerText == currentPlayer && boxes[i - 16].innerText == currentPlayer && boxes[i - 24].innerText == currentPlayer){            
                return true;
            }
            if(boxes[i - 7].innerText == currentPlayer && boxes[i - 14].innerText == currentPlayer && boxes[i - 21].innerText == currentPlayer){
                return true;
            }
        }
    }
    for( i = 38; i >= 24; i-= 7){
        if(boxes[i].innerText == currentPlayer){
            if(boxes[i - 1].innerText == currentPlayer && boxes[i - 2].innerText == currentPlayer && boxes[i - 3].innerText == currentPlayer){  
                return true;
            }
            if(boxes[i + 1].innerText == currentPlayer && boxes[i + 2].innerText == currentPlayer && boxes[i + 3].innerText == currentPlayer){   
                return true;
            }
            if(boxes[i - 8].innerText == currentPlayer && boxes[i - 16].innerText == currentPlayer && boxes[i - 24].innerText == currentPlayer){
                return true;
            }
            if(boxes[i - 6].innerText == currentPlayer && boxes[i - 12].innerText == currentPlayer && boxes[i - 18].innerText == currentPlayer){
                return true;
            }
            if(boxes[i - 7].innerText == currentPlayer && boxes[i - 14].innerText == currentPlayer && boxes[i - 21].innerText == currentPlayer){
                return true;
            }
        }
    }
    for( i = 37; i >= 23; i-= 7){
        if(boxes[i].innerText == currentPlayer){
            if(boxes[i + 1].innerText == currentPlayer && boxes[i + 2].innerText == currentPlayer && boxes[i + 3].innerText == currentPlayer){
                return true;
            }
            if(boxes[i - 6].innerText == currentPlayer && boxes[i - 12].innerText == currentPlayer && boxes[i - 18].innerText == currentPlayer){
                return true;
            }
            if(boxes[i - 7].innerText == currentPlayer && boxes[i - 14].innerText == currentPlayer && boxes[i - 21].innerText == currentPlayer){
                return true;
            }
        }
    }
    for( i = 36; i >= 22; i-= 7){
        if(boxes[i].innerText == currentPlayer){
            if(boxes[i + 1].innerText == currentPlayer && boxes[i + 2].innerText == currentPlayer && boxes[i + 3].innerText == currentPlayer){ 
                return true;
            }
            if(boxes[i - 6].innerText == currentPlayer && boxes[i - 12].innerText == currentPlayer && boxes[i - 18].innerText == currentPlayer){
                return true;
            }
            if(boxes[i - 7].innerText == currentPlayer && boxes[i - 14].innerText == currentPlayer && boxes[i - 21].innerText == currentPlayer){
                return true;
            }
        }
    }
    for( i = 35; i >= 21; i-= 7){
        if(boxes[i].innerText == currentPlayer){
            if(boxes[i + 1].innerText == currentPlayer && boxes[i + 2].innerText == currentPlayer && boxes[i + 3].innerText == currentPlayer){
                return true;
            }
            if(boxes[i - 6].innerText == currentPlayer && boxes[i - 12].innerText == currentPlayer && boxes[i - 18].innerText == currentPlayer){
                return true;
            }
            if(boxes[i - 7].innerText == currentPlayer && boxes[i - 14].innerText == currentPlayer && boxes[i - 21].innerText == currentPlayer){
                return true;
            }
        }
    }
    //below will now check the top three rows
    for( i = 0; i <= 14; i += 7){
        if(boxes[i].innerText == currentPlayer){
            if(boxes[i + 1].innerText == currentPlayer && boxes[i + 2].innerText == currentPlayer && boxes[i + 3].innerText == currentPlayer){
                return true;
            }
            if(boxes[i + 8].innerText == currentPlayer && boxes[i + 16].innerText == currentPlayer && boxes[i + 24].innerText == currentPlayer){
                return true;
            }
            if(boxes[i + 7].innerText == currentPlayer && boxes[i + 14].innerText == currentPlayer && boxes[i + 21].innerText == currentPlayer){
                return true;
            }
        }
    }
    for( i = 1; i <= 15; i += 7){
        if(boxes[i].innerText == currentPlayer){
            if(boxes[i + 1].innerText == currentPlayer && boxes[i + 2].innerText == currentPlayer && boxes[i + 3].innerText == currentPlayer){ 
                return true;
            }
            if(boxes[i + 8].innerText == currentPlayer && boxes[i + 16].innerText == currentPlayer && boxes[i + 24].innerText == currentPlayer){
                return true;
            }
            if(boxes[i + 7].innerText == currentPlayer && boxes[i + 14].innerText == currentPlayer && boxes[i + 21].innerText == currentPlayer){
                return true;
            }
        }
    }
    for( i = 2; i <= 16; i += 7){
        if(boxes[i].innerText == currentPlayer){
            if(boxes[i + 1].innerText == currentPlayer && boxes[i + 2].innerText == currentPlayer && boxes[i + 3].innerText == currentPlayer){
                return true;
            }
            if(boxes[i + 8].innerText == currentPlayer && boxes[i + 16].innerText == currentPlayer && boxes[i + 24].innerText == currentPlayer){
                return true;
            }
            if(boxes[i + 7].innerText == currentPlayer && boxes[i + 14].innerText == currentPlayer && boxes[i + 21].innerText == currentPlayer){
                return true;
            }
        }
    }
    for( i = 3; i <= 17; i += 7){
        if(boxes[i].innerText == currentPlayer){
            if(boxes[i - 1].innerText == currentPlayer && boxes[i - 2].innerText == currentPlayer && boxes[i - 3].innerText == currentPlayer){
                return true;
            }
            if(boxes[i + 1].innerText == currentPlayer && boxes[i + 2].innerText == currentPlayer && boxes[i + 3].innerText == currentPlayer){
                return true;
            }
            if(boxes[i + 6].innerText == currentPlayer && boxes[i + 12].innerText == currentPlayer && boxes[i + 18].innerText == currentPlayer){
                return true;
            }
            if(boxes[i + 8].innerText == currentPlayer && boxes[i + 16].innerText == currentPlayer && boxes[i + 24].innerText == currentPlayer){
                return true;
            }
            if(boxes[i + 7].innerText == currentPlayer && boxes[i + 14].innerText == currentPlayer && boxes[i + 21].innerText == currentPlayer){
                return true;
            }
        }
    }
    for( i = 4; i <= 18; i += 7){
        if(boxes[i].innerText == currentPlayer){
            if(boxes[i - 1].innerText == currentPlayer && boxes[i - 2].innerText == currentPlayer && boxes[i - 3].innerText == currentPlayer){
                return true;
            }
            if(boxes[i + 6].innerText == currentPlayer && boxes[i + 12].innerText == currentPlayer && boxes[i + 18].innerText == currentPlayer){
                return true;
            }
            if(boxes[i + 7].innerText == currentPlayer && boxes[i + 14].innerText == currentPlayer && boxes[i + 21].innerText == currentPlayer){
                return true;
            }
        }
    }
    for( i = 5; i <= 19; i += 7){
        if(boxes[i].innerText == currentPlayer){
            if(boxes[i - 1].innerText == currentPlayer && boxes[i - 2].innerText == currentPlayer && boxes[i - 3].innerText == currentPlayer){
                return true;
            }
            if(boxes[i + 6].innerText == currentPlayer && boxes[i + 12].innerText == currentPlayer && boxes[i + 18].innerText == currentPlayer){
                return true;
            }
            if(boxes[i + 7].innerText == currentPlayer && boxes[i + 14].innerText == currentPlayer && boxes[i + 21].innerText == currentPlayer){
                return true;
            }
        }
    }
    for( i = 6; i <= 20; i += 7){
        if(boxes[i].innerText == currentPlayer){
            if(boxes[i - 1].innerText == currentPlayer && boxes[i - 2].innerText == currentPlayer && boxes[i - 3].innerText == currentPlayer){
                return true;
            }
            if(boxes[i + 6].innerText == currentPlayer && boxes[i + 12].innerText == currentPlayer && boxes[i + 18].innerText == currentPlayer){
                return true;
            }
            if(boxes[i + 7].innerText == currentPlayer && boxes[i + 14].innerText == currentPlayer && boxes[i + 21].innerText == currentPlayer){
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
    
};


restartBtn.addEventListener('click', restart);
restart();

drawBoard();