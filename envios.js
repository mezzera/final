function calcularEnvio() {
  let elementoSeleccionado = document.getElementById("ubicacion-select");
  let valor = elementoSeleccionado.value;

  if (valor === "Buenos Aires") {
    alert("¡Felicidades! Tu envío es completamente gratis.");
  } else if (valor === "Provincia Interior") {
    alert("Hacemos envío a tu ubicación, pero tiene un costo de $1200 pesos.");
  } else if (valor === "Fuera de Argentina") {
    alert("Lo siento, no realizamos envíos fuera de Argentina.");
  }
}


