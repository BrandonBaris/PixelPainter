// $(function(){

//pixelpainter grid
function PixelPainter( width, height ){
  this.width = width;
  this.height = height;
  this.hue = [];
}

PixelPainter.prototype.render = function() {

  var mainGrid = $("<div>", { "class" : "big_grid"});
  for ( var i = 0; i < this.height; i++ ){
    var gridCol = $("<div>", { "class" : "grid_column" });
    for ( var j = 0; j < this.width; j++ ){
      var gridRow = $("<div>", { "class" : "gridbox" });
      gridCol.append ( gridRow );
    }
    mainGrid.append ( gridCol );
  }
  $( "#container" ).append( mainGrid );
};

// color generator using HSL
PixelPainter.prototype.generate = function(){
  for ( var i = 0; i < 360; i +=5 ){
    this.hue.push(i);
  }
  return this.hue;
};

PixelPainter.prototype.renderColor = function(){

  var colorContainer = $("<div>", { "class" : "color_container" });
  for ( var i = 0; i < this.hue.length; i++ ){
    var colorGrid = $("<div>", { "class" : "colorbox", "id" : "color_select" + [i] });
    colorGrid.css( "background-color", "hsl(" + this.hue[i] + ",100%, 50%)");
    colorContainer.append( colorGrid );
    $( "#container" ).append( colorContainer );
  }
    // quickfix black - to be redone
    var colorGrid = $("<div>", { "class" : "colorbox" });
    colorGrid.css( "background-color", "hsl(0,0%,0%)");
    colorContainer.append( colorGrid );

  var erase = $( "<button>", { "id" : "eraser", html : "ERASER" });
  var clearbutton = $( "<button>", { "id" : "clear_all", html : "CLEAR GRID" });
  $( ".color_container" ).append( erase, clearbutton );
  return true;
};

// }); //closure