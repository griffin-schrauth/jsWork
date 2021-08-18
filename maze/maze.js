const boxes = Array.from(document.getElementsByClassName('box'));
console.log(boxes);

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
        //box.addEventListener('click',boxClicked)

    });
};
drawBoard();