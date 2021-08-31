var texto = document.getElementById("txt_lineas");//estas lineas de codigosirven
//para llamar los objetos como botones cuadros de texto, y asignarles una variable
//en javascript
var boton = document.getElementById("botoncito");

boton.addEventListener("click", dibujoporClic);//aqui a esos objetos se les agrega el evento a escuchar.
//ojo no llamar a la funcion con parentesis es decir noe scirbir dibujoporClic(),
//ya que se ejecutaria la funcion ahi y no cuando se supone que debe ejecutarse
var d = document.getElementById("dibujito");

var lienzo= d.getContext("2d");
var ancho= d.width;
console.log(lienzo);



function dibujarLinea(color, xinicial, yinicial, xfinal,yfinal){
  //para iniciar a trazar lineas
  lienzo.beginPath();
  //escoger el color del trazo
  lienzo.strokeStyle=color;
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

function dibujoporClic(){
  console.log(texto);

    var lineas=parseInt(texto.value);
    var espacio= ancho/lineas;
    var l=0;
    var yi, xf;
    var colorcito="#FAA";
    for(l = 0; l < lineas; l++) {
      yi=espacio * l;
      xf=espacio * (l + 1);
      dibujarLinea(colorcito, 0,yi,xf,300);
      dibujarLinea(colorcito, yi,0,300,xf);

      console.log("Linea "+l);

    }
    //colorcito="#FAA";
    var xi;
    var yf;
    for(l = 0; l < lineas; l++) {
      xi=300-(l*10);
      yf=espacio*l;
      dibujarLinea(colorcito,xi,0,0,yf);
      dibujarLinea(colorcito, yf,300,300,xi);

      console.log("Linea "+l);

    }
    //te amo mucho
    dibujarLinea(colorcito, 1,1,1,299);
    dibujarLinea(colorcito, 1,299,299,299);
    dibujarLinea(colorcito, 299,299,299,1);
    dibujarLinea(colorcito, 299,1,1,1);
}
