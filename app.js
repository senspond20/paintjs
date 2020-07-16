const canvas = document.getElementById("jsCanvas");

function onMouseMove(event){
    // console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;
    // console.log(x, y);
}
function onMouseDown(event){
    console.log(event);
}
if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
}