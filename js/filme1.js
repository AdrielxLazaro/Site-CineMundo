document.addEventListener("DOMContentLoaded", () => {
  // Pega os elementos do modal e do vídeo
  const modal = document.getElementById("trailerModal");
  const trailerBtn = document.getElementById("btnTrailer");
  const trailerVideo = document.getElementById("trailerVideo");
  const closeBtn = document.querySelector(".close");

  // Ao clicar no botão "Trailer", abre o modal e inicia o vídeo
  trailerBtn.addEventListener("click", () => {
    modal.style.display = "flex"; // Mostra o modal
    trailerVideo.currentTime = 0; // Reinicia o vídeo do começo
    trailerVideo.play(); // Reproduz o vídeo
  });

  // Ao clicar no botão "X", fecha o modal e pausa o vídeo
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none"; // Esconde o modal
    trailerVideo.pause(); // Pausa o vídeo
  });

  // Ao clicar fora do modal, fecha e pausa o vídeo
  window.addEventListener("click", (e) => {
    if (e.target === modal) { // Verifica se o clique foi no fundo do modal
      modal.style.display = "none"; // Esconde o modal
      trailerVideo.pause(); // Pausa o vídeo
    }
  });
});