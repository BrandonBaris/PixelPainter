$(function(){

function PixelPainter( width, height ){
  this.width = width;
  this.height = height;
  this.render( width, height);
}

PixelPainter.prototype.render = function( width, height ) {
  var mainGrid = $("<div>", { "class" : "big_grid"});
  var gridCol = $("<div>", { "class" : "col" });
  for ( var i = 0; i < height; i++ ){

    for ( var j = 0; j < width; j++ ){
      var gridRow = $("<div>", { "class" : "colorbox"});
      gridCol.append ( gridRow );
    }
    mainGrid.append ( gridCol );
  }
  $( "#container" ).append( mainGrid );

};





// color generator
function Colors() {

  this.palette = [];

};

Colors.prototype.generate = function(){
  for ( var i = 0; i <= 360; i +=4 ){
    this.palette.push(i);
  }
  // console.log('palette',this.palette);
  return this.palette;
};

Colors.prototype.renderColor = function(){
  // var colorbox = [];
  var colorContainer = $("<div>", { "class" : "color_container" });
  for ( var i = 0; i < this.palette.length; i++ ){
        var colorGrid = $("<div>", { "class" : "colorbox", html : "" });
        colorGrid.css( "background-color", "hsl(" + this.palette[i] + ",100%, 50%)");
        // $("body").css( "background", "hsl(" + this.palette[i] + ",100%,50%);");
        colorContainer.append( colorGrid );
        // var parapara = $( "<p>", { html : "asdaf"});
        $( "#container" ).append( colorContainer );
      }
      return true;
};
var swatch = new Colors();
swatch.generate();
console.log('palette',swatch.palette);
swatch.renderColor();
var pixels = new PixelPainter( 30,30 );
// pixels.render(30,30);
}); //closure