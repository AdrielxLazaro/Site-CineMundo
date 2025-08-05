 //Banner principal//

  $(document).ready(function () {
      $('.banner-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 700,
        fade: true,
        cssEase: 'ease-in-out'
      });
    });

//Filmes em cartaz//
const carrossel = document.getElementById('carrossel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

prevBtn.addEventListener('click', () => {
  carrossel.scrollBy({ left: -220,behavior: "smooth"});
  });
  nextBtn.addEventListener('click', () => {
  carrossel.scrollBy({ left: 220, behavior: "smooth"});
  });