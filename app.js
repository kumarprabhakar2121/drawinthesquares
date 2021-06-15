const container = document.querySelector('.container')
const board = document.querySelector('#board')

const colors = ['#FF1493', '#00BFFF', '#ADFF2F', '#4B0082', '#000080','#9ACD32','#FFFAFA']


const SQUARE_NUMBERS = 500;

for (let i=0; i<SQUARE_NUMBERS; i++){
    const square = document.createElement('div'); //create element which will be a square
    square.classList.add('square');//apply certain styles to our squares 
    
    square.addEventListener('mouseover', () => setColor(square))
    board.append(square);
    
    square.addEventListener('mouseleave', ()=> removeColor(square))
}


    
function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` //add shadow
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000' //remove shadow
}
function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length) //method of getting a random elements

    return colors[index] //return a random index of colors array
}