// $(function(){

//pixelpainter grid
function PixelPainter( width, height ){
  this.width = width;
  this.height = height;
  this.palette = [];
  // this.render( width, height);
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


// color generator
// function Colors() {
// };

PixelPainter.prototype.generate = function(){
  for ( var i = 0; i < 360; i +=5 ){
    this.palette.push(i);
  }
  // console.log('palette',this.palette);
  return this.palette;
};

PixelPainter.prototype.renderColor = function(){
  // var colorbox = [];
  var colorContainer = $("<div>", { "class" : "color_container" });
  for ( var i = 0; i < this.palette.length; i++ ){
        var colorGrid = $("<div>", { "class" : "colorbox", "id" : "color_select" + [i] });
        colorGrid.css( "background-color", "hsl(" + this.palette[i] + ",100%, 50%)");
        // $("body").css( "background", "hsl(" + this.palette[i] + ",100%,50%);");
        colorContainer.append( colorGrid );
        // var parapara = $( "<p>", { html : "asdaf"});
        $( "#container" ).append( colorContainer );
      }
      return true;
};

// }); //closure