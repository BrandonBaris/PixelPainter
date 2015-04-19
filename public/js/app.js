$(function(){

//----------------------------------------------- APP LOGIC
  var currentColor = "#000"; //color to draw with
  var pixels = new PixelPainter( 40,30 );

  pixels.render();

  $( ".colorbox" ).click( function(){
    currentColor = $( this ).css( "background-color" );
    // console.log(currentColor);
  });

  $( "#eraser" ).click( function(){
    currentColor = "#fff";
    // console.log(currentColor);
  });

  $( "#clear_all" ).click( function(){
    $( ".gridbox" ).css( "background-color", "#fff");
  });

  // jquery code plugin for disabling text selection
  // http://techlister.com/jquery/disable-and-enable-text-selection-using-jquery/854/
  $.fn.disableSelection = function() {
    return this
    .attr('unselectable', 'on')
    .css('user-select', 'none')
    .css('-moz-user-select', 'none')
    .css('-khtml-user-select', 'none')
    .css('-webkit-user-select', 'none')
    .on('selectstart', false)
    .on('contextmenu', false)
    .on('keydown', false)
    .on('mousedown', false);
  };

  $( ".gridbox" ).disableSelection();

  $( ".gridbox").mousedown( function() {
    pixels.paint(this, currentColor);
  }); 

  var isDown = false;   // Tracks status of mouse button

  $('.gridbox').mousedown(function() {
    isDown = true;      // When mouse goes down, set isDown to true
  })
  .mouseup(function() {
    isDown = false;    // When mouse goes up, set isDown to false
  });

  $(".gridbox").mouseenter(function(){
    if(isDown) {        // Only change css if mouse is down
      pixels.paint(this, currentColor);
    }
  });

// ------------------------------------------------------- FILE SERVER

}); //closure

