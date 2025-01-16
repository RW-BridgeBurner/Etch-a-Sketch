



// Reference to parent div:
const container = document.getElementById('container');

// New square divs:
for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    //square.textContent = `Div ${i+1}`;
    square.classList.add('box');

    container.appendChild(square)
}

// Mouseover
const square = document.querySelectorAll('.box');
square.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'yellow';
    });
});

