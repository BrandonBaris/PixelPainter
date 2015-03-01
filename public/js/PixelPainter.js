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

// colorspace generator 
PixelPainter.prototype.generate = function(){
  //hue
  for ( var i = 0; i < 360; i +=5 ){
    this.hue.push(i);
  }
  //saturation
  for ( var i = 80; i < 100; i += 5 ){
    this.saturation.push(i);
  }
  //lightness
  for ( var i = 60; i > 00; i -= 30 ){
    this.light.push(i);
  }
  return this.hue,this.saturation,this.light;
};

PixelPainter.prototype.renderColor = function(){

  var colorContainer = $("<div>", { "class" : "color_container" });
  for ( var hue_iterate = 0; hue_iterate < this.hue.length; hue_iterate++ ){
    var colorGrid = $("<div>", { "class" : "colorbox", "id" : "color_select" + [hue_iterate] });
    colorGrid.css( "background-color", "hsl(" + this.hue[hue_iterate] + ",100%, 50%)");
    colorContainer.append( colorGrid );
    $( "#container" ).append( colorContainer );

    for( var sat_iterate = 0; sat_iterate < this.saturation.length; sat_iterate++){
      var colorGridS = $("<div>", { "class" : "colorbox", "id" : "color_select" + [hue_iterate] + [sat_iterate] });
      colorGridS.css( "background-color", "hsl(" + this.hue[hue_iterate] + ","+ this.saturation[sat_iterate]+"%, 50%)");
      colorContainer.append( colorGridS );
      $( "#container" ).append( colorContainer ); 
    }

      for( var lig_iterate = 0; lig_iterate < this.light.length; lig_iterate++){
        var colorGridE = $("<div>", { "class" : "colorbox", "id" : "color_select" + [hue_iterate] + [lig_iterate] });
        colorGridE.css( "background-color", "hsl(" + this.hue[hue_iterate] + ",100%, "+this.light[lig_iterate]+"%)");
        colorContainer.append( colorGridE );
        $( "#container" ).append( colorContainer );  
      }
  }
    // quickfix black - to be redone
    var colorGridblack = $("<div>", { "class" : "colorbox" });
    colorGridblack.css( "background-color", "hsl(0,0%,0%)");
    colorContainer.append( colorGridblack );

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

