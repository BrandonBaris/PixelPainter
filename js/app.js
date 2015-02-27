$(function(){
var currentColor; //color to draw with
var pixels = new PixelPainter( 30,30 );

pixels.generate();
console.log('palette',pixels.palette);
pixels.renderColor();
pixels.render();
$( ".colorbox" ).click( function(){
  currentColor = $( this ).css( "background-color" );
  console.log(currentColor);
});

$( "#eraser" ).click( function(){
  currentColor = "rgb(255,255,255)";
  console.log(currentColor);
});

$( "#clear_all" ).click( function(){
  $( ".gridbox" ).css( "background-color", "rgb(255,255,255)");
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

$( ".gridbox" ).mousedown( function(){
  $( ".gridbox" ).mouseover( function () {
    if( currentColor!== undefined){
      $( this ).css( "background-color", currentColor );
    };
    // $( ".gridbox" ).mouseup( function(){
    //   return false;
    // })
  });
});
}); //closure