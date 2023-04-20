$(function () {
  "use strict";
  $(".movie_slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    centerPadding: "45px",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
//MOVE TOP START
let move_top = document.querySelector(".move_top");
window.addEventListener("scroll", function () {
  let scroll_value = Math.ceil(window.scrollY);
  if (scroll_value > 150) {
    move_top.classList.add("show");
  } else {
    move_top.classList.remove("show");
  }
});
//MOVE TOP END
//STICKY NAVBAR START
let navigation_bar = document.querySelector("#navigation_bar");

window.addEventListener("scroll", function () {
  let scroll_value_2 = Math.ceil(window.scrollY);
  if (scroll_value_2 > 150) {
    navigation_bar.classList.add("sticky");
  } else {
    navigation_bar.classList.remove("sticky");
  }
});
//STICKY NAVBAR END
