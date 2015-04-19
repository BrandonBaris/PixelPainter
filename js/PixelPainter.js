$(function(){

function PixelPainter( width, height ) {
    
  this.width = width;
  this.height = height;
  this.controls = $('#controls');
  this.artboard = $('#artboard');
  this.cellSize = 20;

}

// color generator
function Colors() {

  this.palette = [];

}

Colors.prototype.generate = function(){
  for ( var i = 0; i <= 360; i +=10 ){
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
}); //closure