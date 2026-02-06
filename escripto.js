document.querySelectorAll("a").forEach(enlace => {
  enlace.addEventListener("click", e => {
    e.preventDefault();
    const url = enlace.href;

    document.body.classList.add("salida");

    setTimeout(() => {
      window.location.href = url;
    }, 600);
  });
});
const ahora = new Date();
const anio = ahora.getFullYear();
const objetivo = new Date(`September 17, ${anio} 00:00:00`).getTime();

function actualizar() {
  const hoy = new Date().getTime();
  const diff = objetivo - hoy;

  if (diff <= 0) {
    document.querySelector(".contador-bonito").innerHTML =
      "<h2>17 DE SEPTIEMBRE!!!! FELIZ ANIVERSARIO MI AMORRR</h2>";
    return;
  }

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}

setInterval(actualizar, 1000);
actualizar();