document.addEventListener('DOMContentLoaded', () => {
  const elementosCarousel = document.querySelectorAll('.carousel');
  const car = M.Carousel.init(elementosCarousel, {
    duration: 150,
    dist: -80,
    shift: 5,
    padding: 5,
    numVisible: 5,
    indicators: true,
    noWrap: false
  });

  const interval = setInterval(() => {
    var instance = M.Carousel.getInstance(elem);
    instance.next(car);
  }, 3000);
  interval();
});