document.querySelector(".header__burger").onclick = function () {
  document
    .querySelector(".header__menu")
    .classList.toggle("header__menu-active");
  document.querySelector(".header__burger").classList.toggle("active");
  $("body").toggleClass("lock");
};

new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  /*centeredSlides: true,*/
  slidesPerView: "auto",
  watchOverflow: true,
  initialSlide: 0,
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnIteration: false,
  },
  breakpoints: {
	  360: {
		spaceBetween: 0,
	  },
	  680: {
		spaceBetween: 30,
	  },
  }
});
