var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;

canvas.addEventListener("mousedown", my_MouseDown);

function my_MouseDown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent = "mousedown";
}
canvas.addEventListener("mousemove", my_Mousemove);

function my_Mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("last_position_of_x and y=");
        console.log("x=" + last_position_of_x + "y=" + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("current_position_of_mouse_x and y=");
        console.log("x=" + current_position_of_mouse_x + "y=" + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
canvas.addEventListener("mouseup", my_Mouseup);

function my_Mouseup(e) {
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", my_Mouseleave);

function my_Mouseleave(e) {
    mouseEvent = "mouseleave";
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}