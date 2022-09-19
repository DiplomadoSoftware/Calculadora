//script funcion calcular longitud
function emergente(){
    location.href="emergente.html"

}
let entrada=document.getElementById("entrada");
let salida=document.getElementById("salida");

entrada.addEventListener('keyup',convertir);
resultado = document.getElementById("resultado");

let operacion;

function convertir(){

    numero=entrada.value;
    numero = parseFloat(numero);


  operacion = numero*100;
  resultado.innerHTML=numero +" Metro(s) = "+operacion+" Centimetro(s)";
  salida.value=parseFloat(operacion);



}