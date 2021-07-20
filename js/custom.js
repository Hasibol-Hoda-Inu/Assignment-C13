$(function () {


  $('.counter').counterUp({
    delay: 20,
    time: 3000
  });


  $('.venobox').venobox();


  var mixer = mixitup('.latest-projects');

  $('#banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });


  $('.slickhobeekhane').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: ".prev",
    nextArrow: ".next",
    dots: false,
  });
});