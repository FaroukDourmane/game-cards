$(function(e){
  // Slides
  var nextButton_ref = $(".activity-page .landing .slider-container .arrow.left");
  var prevButton_ref = $(".activity-page .landing .slider-container .arrow.right");

  $(".activity-page .landing .slider-container .wrapper").slick({
    centerMode: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: true,
    autoWidth: true,
    prevArrow: $(nextButton_ref),
    nextArrow: $(prevButton_ref),
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
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
    }]
  });


  // More activities slider
  var nextButton = $(".activityBtn.left");
  var prevButton = $(".activityBtn.right");

  $(".more-wrapper").slick({
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: true,
    autoWidth: true,
    prevArrow: $(nextButton),
    nextArrow: $(prevButton),
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
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
    }]
  });

  // Fixed informations
  $(window).scroll(function(e){
    var landing_height = $(".landing").outerHeight(true)+200;
    var scroll = $(window).scrollTop();

    if ( scroll > landing_height )
    {
      $(".fixed-infos").addClass("active");
    }else{
      $(".fixed-infos").removeClass("active");
    }
  });
});
