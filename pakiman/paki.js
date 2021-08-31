var imagenes = [];
imagenes["cauchin"] ="vaca.png";
imagenes["pokacho"] ="pollo.png";
imagenes["tocinauro"] ="cerdo.png";


var coleccion = [];

coleccion.push(new Pakiman("cauchin", 100, 30, "Tierra"));
coleccion.push(new Pakiman("pokacho", 80, 50, "Aire"));
coleccion.push(new Pakiman("tocinauro", 120 , 40 , "Tierra"));

for (var objeto of coleccion) {// esto es un for of, existe el for if y es como el for each en java
  objeto.mostrar();
}


//console.log(cauchin , pokacho , tocinauro);
