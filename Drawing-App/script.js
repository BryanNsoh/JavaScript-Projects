
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeElt = document.getElementById("size")
const colorElt = document.getElementById("color");
const clearElt = document.getElementById("clear");

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');    

let size = 10;
let isPressed = false;
let color = 'black';

canvas.addEventListener('mousedown', (event) => {
    isPressed = true;

    x = event.offsetX;
    y = event.offsetY;
});

canvas.addEventListener('mouseup', (event) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (event) => {
    if(isPressed) {
    const x2 = event.offsetX;
    const y2 = event.offsetY;

    drawCircle(x, y);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
    
    }
}); // Listen when mouse button is pressed. See: https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event

decreaseBtn.addEventListener("click", () => {
    size -= 5;

    if (size < 5) {
        size = 5;
    }

    updateSizeOnScreen()
});

increaseBtn.addEventListener("click", () => {
    size += 5;

    if (size > 50) {
        size = 50;
    }

    updateSizeOnScreen()
});

colorElt.addEventListener('change', (ev) => {
    color = ev.target.value;
}); // Change color of pen to the newly selected color

clearElt.addEventListener('click', (ev) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}); // Change color of pen to the newly selected color



function drawCircle(x, y) { // See: https://www.w3schools.com/tags/canvas_arc.asp#:~:text=Definition%20and%20Usage,the%20arc%20on%20the%20canvas.
                            // Don't forget to set the width and height in HTML
    ctx.beginPath();
    ctx.arc(x, y, size/2, 0, Math.PI*2);
    ctx.fillStyle = color; // Assigning the color of the line
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color; // Assigning the color of the line
    ctx.lineWidth = size;
    ctx.stroke();
}


function updateSizeOnScreen() {
    sizeElt.innerText = size;
}

drawCircle(x, y);
draw();