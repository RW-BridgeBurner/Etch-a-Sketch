



// Reference to parent div:

let gridSize = 0;

while (true) {
    gridSize = prompt("What grid size would you like between 1 and 100?");

    if (gridSize === null) {
        break;
    }

    const number = parseInt(gridSize);

    if (number >=1 && number <= 100) {
        break;
    }    
    else {
        alert("Please enter a number between 1 and 100")
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

let color = getRandomColor();
const containerWidth = 960;

const squareSize = containerWidth / gridSize;
const container = document.getElementById('container');

// New square divs:
for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('box');
    container.appendChild(square)

    // Mouseover
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = `${getRandomColor()}`;
    });
};

const style = document.createElement('style');
style.innerHTML = `
    .box {
        width: ${squareSize}px;
        height: ${squareSize}px;
        background-color: ${color};
    }
`;
document.head.appendChild(style);

