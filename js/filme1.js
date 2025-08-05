document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("trailerModal");
  const trailerBtn = document.getElementById("btnTrailer");
  const trailerVideo = document.getElementById("trailerVideo");
  const closeBtn = document.querySelector(".close");

  // Ao clicar no botão Trailer
  trailerBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    trailerVideo.currentTime = 0;
    trailerVideo.play();
  });

  // Ao clicar no X
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    trailerVideo.pause();
  });

  // Ao clicar fora do modal
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      trailerVideo.pause();
    }
  });
});
