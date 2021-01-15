window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger__active');
    menu.classList.toggle('menu__active');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger__active');
      menu.classList.toggle('menu__active');
    });
  });
});
$(document).ready(function () {

  let outs = document.querySelectorAll('.owl-out');
  for (let out of outs) {

    let owl = out.querySelector('.owl-carousel');
    let btns = out.querySelectorAll(':scope .thumb');

    let owlJq = $(owl);
    owlJq.owlCarousel({
      items: 1,
      loop: false,
      nav: false,
      dots: false,
    });

    for (let btn of btns) {
      btn.addEventListener('click', function () {
        owlJq.trigger('to.owl.carousel', [$(this).index()]);
      })
    }
  };
});