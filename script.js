/ =========================
// BOTÓN "COMENZAR EL VIAJE"
// =========================

const botonComenzar = document.getElementById("comenzar");
const mapa = document.getElementById("mapa");

botonComenzar.addEventListener("click", function() {

mapa.scrollIntoView({
behavior: "smooth"
});

});
