$(function(e){
  $('.order-by').select2();
  // Calendars
  $( "#datepicker" ).datepicker();

  // Add to favorite
  $(".content-container .wrapper .item .like").click(function(e){
    e.preventDefault();
    $(this).toggleClass("active");
  });

  // close search filters
  $(".closeSearch").click(function(e){
    e.preventDefault();
    $(".filters-container").removeClass("active");
  });

  // Open search filters
  $(".openSearch").click(function(e){
    e.preventDefault();
    $(".filters-container").addClass("active");
  });

  // Price range
    $( ".range-container" ).slider({
      range: true,
      min: 1000,
      max: 50000,
      values: [ 1000, 5000 ],
      slide: function( event, ui ) {
        $( ".price_range.min" ).val( ui.values[ 0 ] + " DA ");
        $( ".price_range.max" ).val( ui.values[ 1 ] + " DA ");
      }
    });

    // Search : Activity type select
    $('.activity_type').select2();
});
