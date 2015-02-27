










































// color generator
function Colors() {

  this.palette = [];

}

Colors.prototype.generate = function(){
  for ( var i = 0; i <= 360; i +=10 ){
    this.palette.push(i);
  }
  console.log('palette',this.palette);
};

Colors.prototype.renderColor = function(){

};

var swatch = new Colors();
swatch.generate();
