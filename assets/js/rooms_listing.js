$(function() {

  // Handle counters
  $(".counter .btn").click(function(e){
    e.preventDefault();

    var container = $(this).parent(".counter");
    var input = $(container).find("input");
    var val = parseInt($(input).val());
    var default_min = 0;

    if ( $(input).attr("min") )
    {
      var min = parseInt($(input).attr("min"));
    }else{
      var min = default_min;
    }

    if ($(this).hasClass("plus"))
    {
      $(input).val(val+1);
    } else if ($(this).hasClass("minus"))
    {
      if ( val > min)
      {
        $(input).val(val-1);
      }
    }
  });

  // Init select
  $(".property_type").select2();

  // Filters toggle
  $(".filtersToggle").click(function(e){
    e.preventDefault();
    $(".hidden-filters").toggleClass('active');
  })

  // Price range
    $( ".range-container" ).slider({
      range: true,
      min: 1000,
      max: 50000,
      values: [ 1000, 5000 ],
      slide: function( event, ui ) {
        $( ".price_range" ).val( " DA " + ui.values[ 0 ] + " - DA " + ui.values[ 1 ] );
      }
    });

    $( ".price_range" ).val( " DA " + $( ".range-container" ).slider( "values", 0 ) +
      " - DA " + $( ".range-container" ).slider( "values", 1 ) );

  // Calendars
  $( "#datepicker_in" ).datepicker();
  $( "#datepicker_out" ).datepicker();
})
