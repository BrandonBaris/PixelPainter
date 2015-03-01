//pixelpainter grid
function PixelPainter( width, height ){
  this.width = width;
  this.height = height;
  this.hue = [];
  this.saturation = [];
  this.light = [];
}

PixelPainter.prototype.render = function() {

  var mainGrid = $("<div>", { "class" : "big_grid"});
  for ( var i = 0; i < this.height; i++ ){
    var gridCol = $("<div>", { "class" : "grid_column" });
    for ( var j = 0; j < this.width; j++ ){
      var gridRow = $("<div>", { "class" : "gridbox", "id": i+"x"+j });
      gridCol.append ( gridRow );
    }
    mainGrid.append ( gridCol );
  }
  $( "#container" ).append( mainGrid );
};

PixelPainter.prototype.saveGrid = function(something) {
  var gridState = [];
  $(".gridbox").each(function(index,element){
    gridState.push($(element).css("background-color"));
  });
  console.log(gridState);
};

// color generator using HSL
PixelPainter.prototype.generate = function(){
  for ( var i = 0; i < 360; i +=20 ){
    this.hue.push(i);
  }
   for ( var j = 20; j < 100; j +=10 ){
    this.saturation.push(j);
  }
   for ( var k = 50; k < 90; k +=10 ){
    this.light.push(k);
  }
  console.log(this.saturation);

  return this.hue,this.saturation,this.light;
};

PixelPainter.prototype.renderColor = function(){

  var colorContainer = $("<div>", { "class" : "color_container" });
  for ( var i = 0; i < this.hue.length; i++ ){
    for ( var k = 0; k < this.light.length; k++){
      for ( var j = 0; j < this.saturation.length; j++){

      var colorGrid = $("<div>", { "class" : "colorbox" });
      colorGrid.css( "background-color", "hsl(" + this.hue[i] + "," + this.saturation[j] + "%,"+ this.light[k] + "%)");
      colorContainer.append( colorGrid );
      $( "#container" ).append( colorContainer );
    }

  }
}
    // quickfix black and white
    var colorGridblack = $("<div>", { "class" : "colorbox" });
    colorGridblack.css( "background-color", "hsl(0,0%,0%)");
    var colorGridWhite = $("<div>", { "class" : "colorbox" });
    colorGridWhite.css( "background-color", "hsl(0,100%,100%)");
    var saveButton = $("<button>", { "id" : "save_button", html : "Save" });
    colorContainer.append( colorGridWhite, colorGridblack, saveButton );

  var erase = $( "<button>", { "id" : "eraser", html : "ERASER" });
  var clearbutton = $( "<button>", { "id" : "clear_all", html : "CLEAR GRID" });
  $( ".color_container" ).append( erase, clearbutton );
  return true;
};


PixelPainter.prototype.paint = function( gridBox, currentColor ) {

  if( currentColor !== undefined){
      $(gridBox).css( "background-color", currentColor );
    } else {
      console.log("Palette color not loaded to brush");
    }
};

// }); //closure
