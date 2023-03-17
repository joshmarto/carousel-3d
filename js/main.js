document.addEventListener('DOMContentLoaded', () => {
  const elementosCarousel = document.querySelectorAll('.carousel');
  const car = M.Carousel.init(elementosCarousel, {
    duration: 150,
    dist: -80,
    shift: 5,
    padding: 5,
    numVisible: 5,
    indicators: true,
    noWrap: false,
    onCycleTo: () => {
      setTimeout( () => {
        M.Carousel.getInstance(car[0].el).next();
      }, 4500);
    },
  });
});