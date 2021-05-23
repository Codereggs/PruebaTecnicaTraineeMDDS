//Declarar constantes y variables.
const d = document,
  w = window,
  $modal = d.getElementById("modalView"),
  $video = d.getElementById("video");

//Iniciar evento para reemplazar url y activar el modal.
d.addEventListener("click", (e) => {
  if (e.target.matches(".video img, span")) {
    $modal.classList.toggle("is-active");
    //Función asíncrona que ejecuta el video youtube al pasar 1 segundo.
    setTimeout(function () {
      $video.setAttribute(
        "src",
        "https://www.youtube.com/embed/aR-KAldshAE?rel=0&amp;autoplay=1"
      );
    }, 1000);
  }
  if (e.target.matches(".btnSalir")) {
    $modal.classList.toggle("is-active");
    $video.setAttribute("src", "https://www.youtube.com/embed/aR-KAldshAE");
  }
});

//Adaptar iframe a pantalla de teléfono.
d.addEventListener("DOMContentLoaded", (e) => {
  if (w.outerWidth <= 600) {
    $video.setAttribute("width", "350");
    $video.setAttribute("height", "315");
  }
});
//Adaptar iframe a ventana de teléfono o tablet.
w.addEventListener("resize", (e) => {
  if (e.target.outerWidth <= 600) {
    $video.setAttribute("width", "340");
    $video.setAttribute("height", "315");
  }
  if (e.target.outerWidth > 600) {
    $video.setAttribute("width", "560");
    $video.setAttribute("height", "315");
  }
});
