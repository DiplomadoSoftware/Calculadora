//script funcion calcular masa
let entrada=document.getElementById("entrada");
let salida=document.getElementById("salida");

entrada.addEventListener('keyup',convertir);
resultado = document.getElementById("resultado");

/*selector = document.getElementById("selector");
selector = addEventListener('change',convertir);*/
let operacion;

function convertir(){

    numero=entrada.value;
    numero = parseFloat(numero);

    if(selector.value=="Masa"){
  operacion = numero*1000;
  resultado.innerHTML=numero +" kilo(s) equivalen a "+operacion+" gramos";
  salida.value=parseFloat(operacion);
  

    }
}