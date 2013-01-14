import flash.geom.Matrix;
import flash.display.GradientType;  
import flash.display.MovieClip;

// create background with radial gradient fill
var gradientType:String = GradientType.RADIAL;
var matrix:Matrix = new Matrix();
matrix.createGradientBox(200,200,0,200,50);  


//var gradientColors:Array = [0x8BA3B8, 0x596B7C];  
var gradientColors:Array = [0xff0000, 0xff00ff];
var gradientAlphas:Array = [1,1];  
var gradientRatio:Array = [0,255];  

var mc:MovieClip = new MovieClip();  
mc.graphics.beginGradientFill(gradientType,gradientColors,gradientAlphas,gradientRatio,matrix);  
mc.graphics.drawRect(0, 0, 730, 454);

// add to stage
addChild(mc);