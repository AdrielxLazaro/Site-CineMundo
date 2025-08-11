// =================== BANNER PRINCIPAL ===================
// Espera o documento carregar antes de executar
$(document).ready(function () {
  // Inicializa o Slick Carousel na classe .banner-slider
  $('.banner-slider').slick({
    autoplay: true,            // Ativa rotação automática
    autoplaySpeed: 2000,       // Intervalo de 2 segundos entre slides
    dots: true,                // Exibe os indicadores (bolinhas) de navegação
    arrows: false,             // Remove setas de navegação
    infinite: true,            // Loop infinito (volta ao primeiro slide)
    speed: 700,                // Velocidade da transição (ms)
    fade: true,                 // Transição suave tipo "fade"
    cssEase: 'ease-in-out'     // Curva de aceleração para o efeito
  });
});

// =================== FILMES EM CARTAZ (CARROSSEL MANUAL) ===================

// Pega o elemento principal do carrossel
const carrossel = document.getElementById('carrossel');

// Pega os botões de navegação
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Define quantos pixels o carrossel vai rolar por clique
const scrollAmount = 220;

// -------- Botão Próximo --------
nextBtn.addEventListener('click', () => {
  // Calcula até onde pode rolar no máximo
  const maxScrollLeft = carrossel.scrollWidth - carrossel.clientWidth;

  // Se já está no fim, volta para o início
  if (Math.ceil(carrossel.scrollLeft + scrollAmount) >= maxScrollLeft) {
    carrossel.scrollTo({ left: 0, behavior: "smooth" });
  } 
  // Caso contrário, avança normalmente
  else {
    carrossel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
});

// -------- Botão Anterior --------
prevBtn.addEventListener('click', () => {
  // Se já está no início, volta para o final
  if (carrossel.scrollLeft <= 0) {
    carrossel.scrollTo({ left: carrossel.scrollWidth, behavior: 'smooth' });
  } 
  // Caso contrário, volta normalmente
  else {
    carrossel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }
});