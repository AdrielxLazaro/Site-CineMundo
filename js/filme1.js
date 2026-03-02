function mostrarTrailer() {
    const area = document.getElementById("areaTrailer");
    const video = document.getElementById("videoTrailer");

    const link = "https://www.youtube.com/embed/SEU_ID_AQUI?autoplay=1";

    if (area.style.display === "block") {
        area.style.display = "none";
        video.src = ""; // REMOVE o vídeo → para completamente
    } else {
        area.style.display = "block";
        video.src = link; // CARREGA o vídeo só quando abrir
    }
}