$(".slider").slick({
  prevArrow:
    "<img class='a-left control-c prev slick-prev' src='/1_images/1_layout/1_home/home_arrow-left.svg'>",
  nextArrow:
    "<img class='a-right control-c next slick-next' src='/1_images/1_layout/1_home/home_arrow-right.svg'>",
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
