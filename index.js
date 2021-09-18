$(function () {
  $(".slider").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 1000,
    prevArrow:
      '<img class="slide-arrow prev-arrow" src="assets/images/arrow_left.png" />',
    nextArrow:
      '<img class="slide-arrow next-arrow" src="assets/images/arrow_right.png" />',
    responsive: [
      {
        breakpoint: 1024,    //max-width : 1024
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // autoplay: true,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // autoplay: true,
        },
      },
    ],
  });
});
