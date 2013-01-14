import flash.geom.Matrix;
import flash.display.GradientType;  
import flash.display.Shape;
import flash.display.SpreadMethod;

var mc:Shape = new Shape();
var fType:String = GradientType.LINEAR;
var colors:Array = [ 0xF1F1F1, 0x666666 ];
var alphas:Array = [ 1, 1 ];
var ratios:Array = [ 0, 255 ];
var matr:Matrix = new Matrix();
var sprMethod:String = SpreadMethod.PAD;

matr.createGradientBox( 200, 20, 0, 0, 0 );

mc.graphics.beginGradientFill( fType, colors, alphas, ratios, matr, sprMethod );
mc.graphics.drawRect( 0, 0, width, height );

addChild(mc);