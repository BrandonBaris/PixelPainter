function PixelPainter( width, height){
    
  this.width = width;
  this.height = height;
  this.controls = $('#controls');
  this.artboard = $('#artboard');
  this.cellSize = 20;

  for( var i = 0; i < this.width; i++){
    for(var j = 0; j < this.height; j++){
      $('#container').append("<div>");
    }
  }

  PixelPainter.prototype.render = function (){
    
  // else if (arrayDimensions.length > 1){
  //   // assign currentDimension to next axis (Y or Z)
  //   var currentDimension = arrayDimensions.slice(1);
  //   arrayDimensions.forEach( function ( arrayDimensionY ) {
  //     for (var i = 0; i < arrayDimensionY[0]; i++) {
  //       // generate but pass it in as numbers not array.. maybe use apply
  //       result.push(this.generate(currentDimension));
  //     }
  //   });
  // }
  };
  
}