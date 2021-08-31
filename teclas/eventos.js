var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
console.log(teclas);
document.addEventListener("mousedown", dibujarMouse);
document.addEventListener("keydown", dibujarTeclado)
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;
dibujarLinea("red", x-1, y-1, x+1, y+1, papel);
function dibujarLinea(color, xinicial, yinicial, xfinal,yfinal, lienzo){
  //para iniciar a trazar lineas
  lienzo.beginPath();
  //escoger el color del trazo
  lienzo.strokeStyle=color;
  //escoge el ancho de la linea
  lienzo.lineWidth=3;
  //establece el punto inicial del trazo
  lienzo.moveTo(xinicial,yinicial);
  //establece el punto final del trazo
  lienzo.lineTo(xfinal,yfinal);
  //esta funcion dibuja la linea
  lienzo.stroke();
  //con esta funcion levantamos
  //la mano para terminar el trazo
  lienzo.closePath();
}

function dibujarMouse(evento){
  var colorcito= "blue";
  console.log(evento);
  var x_mouse = evento.layerX;
  var y_mouse = evento.layerY;
  dibujarLinea(colorcito, x,y, x_mouse, y_mouse, papel);
  x= x_mouse;
  y=y_mouse;
}


function dibujarTeclado(evento){
  console.log(evento);
var colorcito= "red";
var movimiento=5;
switch (evento.keyCode) {
  case teclas.DOWN:
    dibujarLinea(colorcito, x, y, x, y+movimiento,papel);
    y= y + movimiento;
    break;
  case teclas.UP:
    dibujarLinea(colorcito, x, y, x, y-movimiento,papel);
    y= y - movimiento;
      break;
  case teclas.LEFT:
    dibujarLinea(colorcito, x, y, x-movimiento, y, papel);
    x= x - movimiento;
      break;
  case teclas.RIGHT:
    dibujarLinea(colorcito, x, y, x+movimiento, y, papel);
    x= x + movimiento;
      break;
  default:
  console.log("Otra tecla");
}

}
