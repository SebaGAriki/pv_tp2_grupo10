/*1.- Declarar una función con nombre calcularMayor() y pasarle como parámetros (numero1, numero2).
Dentro de la función mostrar un alert que diga cuál de los números ingresados es mayor. En caso de ser
iguales, tendrá que indicarlo a través de un alert también. Invocar la función y enviar los argumentos
con diferentes números para probar.
*/

let numero1;
let numero2;

calcularMayor(10, 5);

function calcularMayor(numero1, numero2) {
    

    if (numero1>numero2) {
        alert(numero1 + " es mayor que " + numero2);
    } else if (numero1<numero2){
        alert(numero1 + " es menor que " + numero2);
    } else{
        alert(numero1 + " es igual que " + numero2 + ", que loco no? :O");
    }
    
}
function comparar() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);

  calcularMayor(numero1, numero2);
}
