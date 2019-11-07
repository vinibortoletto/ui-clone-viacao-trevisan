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
  accessibility: true,
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
});
