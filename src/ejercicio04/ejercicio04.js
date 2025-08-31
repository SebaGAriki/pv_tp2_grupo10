function mostrarDatos() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const libreta = document.getElementById("libreta").value;

    alert(`Los datos ingresados son: Nombre: ${nombre} Apellido: ${apellido} Libreta Universitaria: ${libreta}`);
}
