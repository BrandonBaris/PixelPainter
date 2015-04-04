//pixelpainter grid
function PixelPainter( width, height ){
  this.width = width;
  this.height = height;
  this.hue = [];
  this.saturation = [];
  this.light = [];
}


PixelPainter.prototype.render = function( array) {


  var mainGrid = $("<div>", { "class" : "big_grid"});
  for ( var i = 0; i < this.height; i++ ){
    var gridCol = $("<div>", { "class" : "grid_column" });
    for ( var j = 0; j < this.width; j++ ){
      var gridRow = $("<div>", { "class" : "gridbox", "id": i+"x"+j, "data-row": i, "data-col" : j });
      if(array){
        gridRow.css("background-color", array[i]);
      }
      gridCol.append ( gridRow );
    }
    mainGrid.append ( gridCol );
  }
  $( "#container" ).append( mainGrid );
  if(!array) {
    this.renderColor();
    var filesGrp = $("<div>", { "id" : "files" });
    $( ".color_container" ).append(filesGrp);
    this.loadSaves();
  }
};

PixelPainter.prototype.loadPicture = function( pictureId) {
  var id = $(this).attr('pictureId');

  $.ajax({
    url: "/loadPic",
    type: "GET",
    data: { "id" : id },
    complete: function( data ){
      var arrayColors = JSON.parse(data.responseText);
      console.log('data.responseText',data.responseText[0].gridState);
      for(i in arrayColors) {
        // $( $('.gridBox')[i] ).css("background-color", arrayColors.gridState[i]);
        // console.log('arrayColors.gridState[i]',arrayColors.gridState[i]);
      }
      // PixelPainter.prototype.render(arrayColors);
    }
  });

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

// color generator using HSL
PixelPainter.prototype.generate = function(){
  for ( var hu = 0; hu < 360; hu += 30 ){
    this.hue.push(hu);
  }
  for ( var sat = 50; sat < 100; sat += 10 ){
    this.saturation.push(sat);
  }
  this.light.push(50);

  // for ( var i = 60; i > 0; i -= 30 ){
  //  this.light.push(k);
  // }
  return this.hue, this.saturation, this.light;
};

PixelPainter.prototype.renderColor = function(){

  var colorContainer = $("<div>", { "class" : "color_container" });
  this.generate();

  for ( var i = 0; i < this.hue.length; i++ ){
    for ( var j = 0; j < this.saturation.length; j++){
      for ( var k = 0; k < this.light.length; k++){

        var colorGrid = $("<div>", { "class" : "colorbox" });
        colorGrid.css( "background-color", "hsl(" + this.hue[i] + "," + this.saturation[j] + "%,"+ this.light[k] + "%)");
        
        colorContainer.append( colorGrid );
      }
    }
  }

  $( "aside" ).append( colorContainer );

  var colorGridblack = $("<div>", { "class" : "colorbox" });
  colorGridblack.css( "background-color", "#000");
  var colorGridWhite = $("<div>", { "class" : "colorbox" });
  colorGridWhite.css( "background-color", "#fff");
  colorContainer.append( colorGridblack, colorGridWhite );

  // var loadButton  = $( "<button>", { "id" : "load_button", "class" : "pure-button", "html" : "Load", click: this.loadPicture});
  var saveButton  = $( "<button>", { "id" : "save_button", "class" : "pure-button", "html" : "Save", click: this.saveGrid});
  // var erase       = $( "<button>", { "id" : "eraser", "class" : "pure-button", "html" : "ERASER" });
  var resetButton = $( "<button>", { "id" : "clear_all", "class" : "pure-button", "html" : "New Canvas" });
  var buttonRow = $("<div>").addClass("button_row").append( resetButton, saveButton );

  $( ".color_container" ).prepend( buttonRow );
  
  return true;
};

PixelPainter.prototype.loadSaves = function() {
  var _pixelpainter = this;
  $('#files').empty();
  $.ajax({
    url: "/load",
    type: "GET",
    complete: function( data ){
      for( var i = 0; i < data.responseJSON.length; i++) {
        var filerow = $("<div>").html("<p>"+data.responseJSON[i].filename+"</p>").attr({"pictureId": data.responseJSON[i]._id });
        filerow.click( _pixelpainter.loadPicture );
        // console.log('data.responseJSON',data.responseJSON);
        $("#files").append(filerow);
      }

    }
  });
};

PixelPainter.prototype.paint = function( gridBox, currentColor ) {

  if( currentColor !== undefined){
    $(gridBox).css( "background-color", currentColor );
  } else {
    console.log("Palette color not loaded to brush");
  }
};

