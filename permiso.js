let consentimiento = confirm("¿Usted es mayor de edad?");

if (consentimiento) {
  alert("Bienvenido/a a nuestra página");
} else {
  alert("Usted está a punto de entrar bajo su propio consentimiento");
}

window.onbeforeunload = function() {
  return "¡Atención! Estás abandonando el sitio. ¿Estás seguro?";
};