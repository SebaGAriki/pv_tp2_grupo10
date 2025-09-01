document.getElementById("botonCalcular").addEventListener("click", function(){
  let entrada = document.getElementById("inputCadena").value;
  let resultado = reemplazarSignos(entrada);
  alert("Resultado: " + resultado);
});

function reemplazarSignos(cadena){
  let caracteres = cadena.split(""); // split: Divide una cadena en partes usando un separador y devuelve un array
  let nuevaCadena = [];

  for(let i = 0; i < caracteres.length; i++){
    let actual = caracteres[i];

    if(actual === "?"){
      let izquierda = 0;
      let derecha = 0;

      if(caracteres[i - 1] === "0" || caracteres[i - 1] === "1" || caracteres[i - 1] === "2" || caracteres[i - 1] === "3" || caracteres[i - 1] === "4"){
        izquierda = parseInt(caracteres[i - 1]); // parseInt(): Toma una cadena de texto y devuelve el número entero que representa
      }
      if(caracteres[i + 1] === "0" || caracteres[i + 1] === "1" || caracteres[i + 1] === "2" || caracteres[i + 1] === "3" || caracteres[i + 1] === "4"){
        derecha = parseInt(caracteres[i + 1]); // parseInt(): Toma una cadena de texto y devuelve el número entero que representa
      }

      let suma = izquierda + derecha;
      nuevaCadena.push(suma.toString()); // toString(): Transforma un valor (como un número, booleano, etc.) en una cadena de texto
    }else{
      nuevaCadena.push(actual); // push: Inserta un nuevo valor al final del array
    }
  }
  return nuevaCadena.join(""); // join: Une todos los elementos de un array en una sola cadena, usando un separador
}