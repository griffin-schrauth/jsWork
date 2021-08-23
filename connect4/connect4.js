const boxes = Array.from(document.getElementsByClassName('box'));
const buttons = Array.from(document.getElementsByClassName('col'));
console.log(boxes);
console.log(buttons);

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
            styleString += 'border-bottom: 3px solid var(--purple);';
        
            styleString += 'border-right: 3px solid var(--purple);';
        
            styleString += 'border-left: 3px solid var(--purple);';
        
            styleString += 'border-top: 3px solid var(--purple);';
        }
        box.style = styleString;
    });
};

const element = document.querySelector(".col");

element.addEventListener("click", () => {
	console.log("clicked element");
});


const boxClicked = (e) => {
    
    const id = e.target.id;
   
    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        if(playerHasWon()){
            playText.innerText = `${currentPlayer} has won`;
            return;
        }
        currentPlayer = currentPlayer == O_TEXT ? X_TEXT : O_TEXT;
    }

};

const playerHasWon = () => {
    if(spaces[0] == currentPlayer){
        if(spaces[1] == currentPlayer && spaces[2] == currentPlayer){
            console.log(`${currentPlayer} wins up top`)
            return true;
        }
        if(spaces[3] == currentPlayer && spaces[6] == currentPlayer){
            console.log(`${currentPlayer} wins on the left`)
            return true;
        }
        if(spaces[4] == currentPlayer && spaces[8] == currentPlayer){
            console.log(`${currentPlayer} wins diagonally`)
            return true;
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
}


restartBtn.addEventListener('click', restart);
restart();

drawBoard();