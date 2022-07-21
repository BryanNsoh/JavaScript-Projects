const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let size = 10;

canvas.addEventListener('mousemove', (event) => {
    const x = event.offsetX;
    const y = event.offsetY;

    drawCircle(x, y);
}); // Listen when mouse button is pressed. See: https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event




function drawCircle(x, y) { // See: https://www.w3schools.com/tags/canvas_arc.asp#:~:text=Definition%20and%20Usage,the%20arc%20on%20the%20canvas.
                            // Don't forget to set the width and height in HTML
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI*2);
    ctx.fill();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(50, 50);
    requestAnimationFrame(draw); // Excecute draw every animation frame
}

drawCircle(x, y)
draw();