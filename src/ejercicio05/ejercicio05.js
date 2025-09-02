numero1 = parseInt(document.getElementById("primerNumero").value);
numero2 = parseInt(document.getElementById("segundoNumero").value);

suma = numero1 + numero2;

console.log("suma capturada" + suma);


document.getElementById("calcular").onclick = function() {
    let nombre = document.getElementById("nombre").value;
    numero1 = Number(document.getElementById("primerNumero").value);
    numero2 = parseInt(document.getElementById("segundoNumero").value);

    let suma = numero1 * numero2;
    if (numero1 > 160) {
        suma *= 1.20;
    }
    if (numero1 > 720) {
        document.getElementById("resultadoSuma").innerHTML ="No es posible trabajar mas de 720 horas MENTIROSO :(";
    return;
    }
    
    document.getElementById("resultadoSuma").innerHTML =nombre +" tu paga este mes sera " + suma;
    document.getElementById("resultadoSuma").style.display = "inline";
    return;
}  
