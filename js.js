let table = new Rectangular(200, 100);


function drawRectangular() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext('2d');
    ctx.fillStyle='#fa4b2a';
    ctx.fillRect(50, 50, table.getWidth(), table.getHeight());
}

table.setWidth(300);
table.setHeight(150);
drawRectangular();

document.getElementById("area").innerText = table.getArea();
document.getElementById("perimeter").innerText = table.getPerimeter();