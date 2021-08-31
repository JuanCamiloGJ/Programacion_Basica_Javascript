class Billete{

  constructor(v,c){

    this.valor = v;
    this.cantidad = c;
    this.imagen= new Image();

    this.imagen.src= imagenes[this.valor+""];
  }
}
//var imagenb2 = document.createElement("p");
//document.body.appendChild(imagenb);



function entregarDinero(){

  limpiar_desconteo();
  var entregado = [];


  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(let bi of caja)
  {
    if(dinero > 0)
    {

      div = Math.floor(dinero / bi.valor);

      if (div > bi.cantidad)
      {

        papeles = bi.cantidad;

      }else {

        papeles = div;

      }

      descontar(bi.valor, papeles);

      entregado.push(new Billete(bi.valor, papeles));
      dinero = dinero - (bi.valor * papeles);

    }

  }
  resultado.innerHTML="";
  if(dinero>0){

  resultado.innerHTML = "No tengo tanto dinero para entregar :(";

  }else {

  for(let e of entregado)

    {

      if (e.cantidad>0) {

        resultado.innerHTML = resultado.innerHTML + e.cantidad+" billetes de $"+
        e.valor+ " <br />";//+ document.body.appendChild(e.imagen)+"<br />";
        var imagenb += document.body.appendChild(e.imagen);
        document.body.replaceChild(imagenb, imagenb);

      }

    }
    desconteo_real();
    disponible.innerHTML= conteoDisponible();
  }



}

function descontar(valor, cantidad_sacada){
  for(let c2 of caja2){
    if(c2.valor==valor){

      c2.cantidad+= cantidad_sacada;

    }

  }

}

function desconteo_real(){


    for(let i=0; i<caja.length; i++){
      for(let j=0; j<caja2.length; j++){

        if (caja[i].valor == caja2[j].valor)
        {

          caja[i].cantidad-=caja2[j].cantidad;

        }

      }
    }

}

function limpiar_desconteo(){

  for(let e of caja2){

    e.cantidad=0;
  }
}

var imagenes= [];
imagenes["100000"]= "cienmil.png";
imagenes["50000"]= "cincuentamil.png";
imagenes["20000"]= "veintemil.png";
imagenes["10000"]= "diezmil.png";


var caja = [];
var caja2 =[];


caja2.push(new Billete(100000,0));
caja2.push(new Billete(50000,0));
caja2.push(new Billete(20000,0));
caja2.push(new Billete(10000,0));

caja.push(new Billete(100000,5));
caja.push(new Billete(50000,20));
caja.push(new Billete(20000,6));
caja.push(new Billete(10000,2));


var dinero = 0;
var div = 0;
var papeles = 0;



var b = document.getElementById("extraer");
var resultado = document.getElementById("resultado");
var disponible = document.getElementById("disponible");
var conteodisponible= "";
function conteoDisponible() {
  var conteodisponible="";
  for (let e of caja){
    conteodisponible+= "Hay disponibles "+e.cantidad+ " de "+ e.valor+" <br />";
  }
  return conteodisponible;
}

disponible.innerHTML= conteoDisponible();
b.addEventListener("click", entregarDinero);
