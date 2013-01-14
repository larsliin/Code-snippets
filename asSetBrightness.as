import flash.geom.ColorTransform;
var color:ColorTransform = new ColorTransform();
var c:int = 200;
   
color.redOffset   = c;
color.greenOffset = c;
color.blueOffset  = c;
   
mc.transform.colorTransform = color;