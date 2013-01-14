var fType:String = GradientType.LINEA
var colors:Array = [ 0xF1F1F1, 0x666666 ];
var alphas:Array = [ 1, 1 ];
var ratios:Array = [ 0, 255 ];
var matr:Matrix = new Matrix();
var sprMethod:String = SpreadMethod.PAD;
var triangleShape:Shape = new Shape();
var rectWidth:Number = 200;
var rectHeight:Number = 300;
var cornerRadius:Number = 10;

var triangleWidth:Number = (Math.sqrt((Math.pow(30,2)) + (Math.pow(30,2))));
matr.createGradientBox(200, 300, Math.PI/2, 0, 0);

triangleShape.graphics.beginGradientFill( fType, colors, alphas, ratios, matr, sprMethod );
triangleShape.graphics.moveTo((cornerRadius), 0)
triangleShape.graphics.lineTo(rectWidth-cornerRadius,0);
triangleShape.graphics.curveTo(rectWidth, 0, rectWidth, cornerRadius);
triangleShape.graphics.lineTo(rectWidth,rectHeight-cornerRadius);
triangleShape.graphics.curveTo(rectWidth, rectHeight, rectWidth-cornerRadius, rectHeight);

triangleShape.graphics.lineTo((rectWidth / 2) + (triangleWidth/2),rectHeight);
triangleShape.graphics.lineTo((rectWidth/2),(rectHeight+(triangleWidth/2)));
triangleShape.graphics.lineTo(((rectWidth/2) - (triangleWidth/2)),rectHeight);
triangleShape.graphics.lineTo(cornerRadius,rectHeight);
triangleShape.graphics.curveTo(0, rectHeight, 0, rectHeight-cornerRadius);
triangleShape.graphics.lineTo(0,(cornerRadius));
triangleShape.graphics.curveTo(0, 0, cornerRadius, 0);
triangleShape.graphics.endFill();

addChild(triangleShape);