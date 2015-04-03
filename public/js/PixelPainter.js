//pixelpainter grid
function PixelPainter( width, height ){
  this.width = width;
  this.height = height;
  this.hue = [];
  this.saturation = [];
  this.light = [];
}

PixelPainter.prototype.loadSaves = function() {
  $.ajax({
    url: "/load",
    type: "GET",
    complete: function( data ){
      for( var i = 0; i < data.responseJSON.length; i++) {
        $('#files').append("<p>"+data.responseJSON[i].filename+"</p>");
      }
    }
  });
};

PixelPainter.prototype.render = function() {

  var mainGrid = $("<div>", { "class" : "big_grid"});
  for ( var i = 0; i < this.height; i++ ){
    var gridCol = $("<div>", { "class" : "grid_column" });
    for ( var j = 0; j < this.width; j++ ){
      var gridRow = $("<div>", { "class" : "gridbox", "id": i+"x"+j, "data-row": i, "data-col" : j });

      gridCol.append ( gridRow );
    }
    mainGrid.append ( gridCol );
  }
  $( "#container" ).append( mainGrid );
};

PixelPainter.prototype.saveGrid = function( event) {
  event.preventDefault();

  var filename  = prompt("Save drawing as... ", "New Drawing");

  var gridState = [];
  $(".gridbox").each(function( index, element ){
    gridState.push( $(element).css("background-color"));
  });

  gridState = JSON.stringify(gridState);

  $.ajax({
    url: "/save",
    type: "POST",
    data: {
      filename: filename,
      gridState: gridState
    },
    complete: function( data ){
      PixelPainter.prototype.loadSaves();
    }
  });

};

PixelPainter.prototype.loadGrid = function( pictureId) {


};

// color generator using HSL
PixelPainter.prototype.generate = function(){
  for ( var i = 0; i < 360; i += 20 ){
    this.hue.push(i);
  }
  for ( var i = 50; i < 100; i += 10 ){
    this.saturation.push(i);
  }
  this.light.push(50);

  // for ( var i = 60; i > 0; i -= 30 ){
  //  this.light.push(k);
  // }
  return this.hue,this.saturation,this.light;
};

PixelPainter.prototype.renderColor = function(){

  var colorContainer = $("<div>", { "class" : "color_container" });

  for ( var i = 0; i < this.hue.length; i++ ){
    for ( var j = 0; j < this.saturation.length; j++){
      for ( var k = 0; k < this.light.length; k++){

        var colorGrid = $("<div>", { "class" : "colorbox" });
        colorGrid.css( "background-color", "hsl(" + this.hue[i] + "," + this.saturation[j] + "%,"+ this.light[k] + "%)");
        colorContainer.append( colorGrid );
        $( "aside" ).append( colorContainer );
    }
  }
}
  // quickfix black and white
  var colorGridblack = $("<div>", { "class" : "colorbox" });
  colorGridblack.css( "background-color", "hsl(0,0%,0%)");
  var colorGridWhite = $("<div>", { "class" : "colorbox" });
  colorGridWhite.css( "background-color", "hsl(0,100%,100%)");
  colorContainer.append( colorGridblack, colorGridWhite );
  

  var loadButton  = $( "<button>", { "id" : "load_button", "class" : "pure-button", "html" : "Load", click: this.loadGrid});
  var saveButton  = $( "<button>", { "id" : "save_button", "class" : "pure-button", "html" : "Save", click: this.saveGrid});
  // var erase       = $( "<button>", { "id" : "eraser", "class" : "pure-button", "html" : "ERASER" });
  var resetButton = $( "<button>", { "id" : "clear_all", "class" : "pure-button", "html" : "New Canvas" });
  var buttonRow = $("<div>").addClass("button_row").append( resetButton, saveButton, loadButton );

  $( ".color_container" ).prepend( buttonRow );
  
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
