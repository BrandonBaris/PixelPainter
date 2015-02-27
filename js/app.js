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
}); //closure