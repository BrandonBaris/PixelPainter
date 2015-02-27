










































// color generator
function Colors() {

  this.palette = [];

}

Colors.prototype.generate = function(){
  for ( var i = 0; i <= 360; i +=10 ){
    this.palette.push(i);
  }
  console.log('palette',this.palette);
  return this.palette;
};

Colors.prototype.renderColor = function(){
  // var colorbox = [];
  for ( var i = 0; i < this.palette.length; i++ ){

        var colorGrid = $("<div>", { "class" : "colorbox" });
        colorGrid.css( "background-color", "hsl(" + this.palette[i] + ",100%, 50%)");
        // $("body").css( "background", "hsl(" + this.palette[i] + ",100%,50%);");

        console.log(colorGrid);
        // var parapara = $( "<p>", { html : "asdaf"});
        $( "#controls" ).append( colorGrid );
      }
};

var swatch = new Colors();
swatch.generate();
// console.log(swatch.generate());
swatch.renderColor();

// "hsl(" + this.palette[i] + ",100%, 50%)"