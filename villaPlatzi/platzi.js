var vp= document.getElementById("villaplatzi");//traigo el canvas
var papel = vp.getContext("2d");//selecciono el modo 2d de canvas

var vaca ={//esto es json javascript object notation
    url: "vaca.png",//la separacion de las variables se realizan con la coma ',' no con ';'
    cargaOK: false
};

var fondo= {
  url: "tile.png",
  cargaOK:false
}

var pollo= {

  url: "pollo.png",
  cargaOK:false
}

var cerdo={
  url:"cerdo.png",
  cargaOK:false
}
fondo.imagen= new Image();//creo un objeto de tipo Image que es agregado a nuestro json
fondo.imagen.src= fondo.url;//coloco la ruta del archivo, ene ste caso ale star en la misma carpeta solo s ecoloca el nombre dle archivo
fondo.imagen.addEventListener("load", cargarFondo);//se le añade un evento al objeto image que significa que carga la imagen

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen= new Image();
pollo.imagen.src=pollo.url;
pollo.imagen.addEventListener("load", cargarPollos)

cerdo.imagen= new Image();
cerdo.imagen.src= cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo)
function cargarFondo(){
  fondo.cargaOK= true;//cambia a tru el boolean de cargaOK
  dibujar();//dibuja el objeto
}
function cargarVacas(){
  vaca.cargaOK= true;
  dibujar();
}
function cargarPollos(){
  pollo.cargaOK= true;
  dibujar();
}
function cargarCerdo() {
  cerdo.cargaOK=true;
  dibujar();
}


var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
document.addEventListener("keydown", caminaCerdo);
var posxcerdo=0;
var posycerdo=0;
function caminaCerdo(evento) {
  var movimiento=10;

  switch (evento.keyCode) {
    case teclas.DOWN:

      posycerdo= posycerdo + movimiento;
      dibujar();
      break;
    case teclas.UP:

    posycerdo= posycerdo - movimiento;
    dibujar();
        break;
    case teclas.LEFT:

      posxcerdo= posxcerdo - movimiento;
      dibujar();
        break;
    case teclas.RIGHT:

      posxcerdo= posxcerdo + movimiento;
      dibujar();
        break;
    default:
    console.log("Otra tecla");
  }
  console.log("pos x"+posxcerdo+ " pos y "+ posycerdo);
}


var cantidad= aleatorio(1,8);
function dibujar(){
  if(fondo.cargaOK){//evalua si cargo el obejto
    papel.drawImage(fondo.imagen, 0,0);//dibuja la imagen en als coordenadas

  }
  if(vaca.cargaOK){
    for(let i=0; i<cantidad; i++){
      var x= aleatorio(0,5);
      var y= aleatorio(0,5);
      x= x*70;
      y=y*70;
      papel.drawImage(vaca.imagen, x, y);
    }

  }
  if(pollo.cargaOK ){
    for(let i=0; i<cantidad; i++){
      var x= aleatorio(0,5);
      var y= aleatorio(0,5);
      x= x*70;
      y=y*70;
      papel.drawImage(pollo.imagen, x, y);
    }
  }
  if (cerdo.cargaOK) {
    papel.drawImage(cerdo.imagen,posxcerdo,posycerdo);
  }

}

function aleatorio(min, maxi){

  var resultado;
  resultado= Math.floor(Math.random()*(maxi - min +1))+min;
  return resultado;
}
