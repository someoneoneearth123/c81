const canvas = document.querySelector("canvas");
const colorInput = document.getElementById("color");
const clearBtn = document.getElementById("clear");

var ctx = canvas.getContext("2d");

canvas.addEventListener('click', mouseDown);
clearBtn.addEventListener('click', clear);

function mouseDown(e) {
    var color = colorInput.value;
    console.log(color);

    var mouseX = e.clientX - canvas.offsetLeft;
    var mouseY = e.clientY - canvas.offsetTop;

    console.log(mouseX, mouseY);
    circle(mouseX, mouseY);
}

function circle(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = colorInput.value;
    ctx.lineWidth = 2;
    ctx.arc(x, y, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log("Canvas cleared");
}