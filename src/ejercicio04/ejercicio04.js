function mostrarDatos() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let libreta = document.getElementById("libreta").value;

    let soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;

    if (!soloLetras.test(nombre)) {
        alert("El nombre solo puede contener letras.");
        return;
    }

    if (!soloLetras.test(apellido)) {
        alert("El apellido solo puede contener letras.");
        return;
    }

    alert("Los datos ingresados son: Nombre: " + nombre +
          " Apellido: " + apellido +
          " Libreta Universitaria: " + libreta);
}