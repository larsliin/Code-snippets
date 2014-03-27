package {
	import flash.display.GradientType;
	import flash.geom.Matrix;
	import flash.display.MovieClip;
	import flash.display.Shape;
	import flash.display.Stage;

	/**
	 * @author larlii
	 */
	public class Utils extends MovieClip{
		
		public function Utils() {
		}
		
		// scale to stage
		public function scaleAndCenter(object : DisplayObject, originalWidth : Number, originalHeight : Number, stage : Stage) : void {
			var widthRatio : Number = stage.stageWidth / originalWidth;
			var heightRatio : Number = stage.stageHeight / originalHeight;
			var ratio : Number = widthRatio;
			var top : Number;
			var left : Number;

			if (widthRatio * originalHeight < stage.stageHeight) {
				ratio = heightRatio;
				top = 0;
				left = ((originalWidth * ratio) - stage.stageWidth) / 2;
			} else {
				top = ((originalHeight * ratio) - stage.stageHeight) / 2;
				left = 0;
			}

			object.x = - 1 * left;
			object.y = - 1 * top;
			object.width = originalWidth * ratio;
			object.height = originalHeight * ratio;
		}
		
		public function scaleToStagewidth(object : DisplayObject, originalWidth : Number, originalHeight : Number, stage : Stage) : void {
			var widthRatio : Number = stage.stageWidth / originalWidth;
			object.width = stage.stageWidth;
			object.height = originalHeight * widthRatio;

			if (object.height < stage.stageHeight) {
				object.x = 0;
				object.y = 0;
			} else {
				object.x = 0;
				object.y = - 1 * ((object.height - stage.stageHeight) / 2);
			}
		}
		
		public function getRoundCornerShape(color:int,width:Number,height:Number,round:Number):MovieClip{
			var s:Shape = new Shape();
			var m:MovieClip = new MovieClip();
			
			s.graphics.beginFill(color);
			s.graphics.drawRoundRect(0,0,width,height,round,round);
			s.graphics.endFill();
			m.addChild(s);
			
			return m;
		}
		
		public function getOutlinedRoundCornedShape(fillcolor:int,outlinecolor:int,width:Number,height:Number,round:Number):MovieClip{
			var s:Shape = new Shape();
			var m:MovieClip = new MovieClip();
			
			s.graphics.lineStyle(1,outlinecolor,1,true,"normal","none","miter");
			s.graphics.beginFill(fillcolor);
			s.graphics.drawRoundRect(0,0,width,height,round,round);
			s.graphics.endFill();
			m.addChild(s);
			
			return m;
		}
		
		public function getRoundCornerGradientShape(startColor:uint,endColor:uint,width:Number,height:Number,round:Number):MovieClip{
			var gradientType:String = GradientType.LINEAR;
			var matrix:Matrix = new Matrix();
			matrix.createGradientBox(width,height,Math.PI/2);
			
			var gradientColors:Array = [startColor,endColor];
			var gradientAlphas:Array = [1,1];
			var gradientRatio:Array = [0,255];  
			
			var s:MovieClip = new MovieClip();  
			s.graphics.beginGradientFill(gradientType,gradientColors,gradientAlphas,gradientRatio,matrix);  
			s.graphics.drawRoundRect(0, 0, width, height, round);
			
			return s;
		}
		
		public function getRectShape(color:int,width:Number,height:Number):MovieClip{			
			var m:MovieClip = new MovieClip();
			var shape:Shape = new Shape();
			
			shape.graphics.beginFill(color);
			shape.graphics.drawRect(0,0,width,height);
			shape.graphics.endFill();            
			m.addChild(shape);
			
			return m;
		}
		
		public function getGradientShape(startColor:uint,endColor:uint,width:Number,height:Number,alphaStart:Number,alphaEnd:Number):MovieClip{
			var gradientType:String = GradientType.LINEAR;
			var matrix:Matrix = new Matrix();
			matrix.createGradientBox(width,height,Math.PI/2);
			
			var gradientColors:Array = [startColor,endColor];
			var gradientAlphas:Array = [alphaStart,alphaEnd];
			var gradientRatio:Array = [0,255];  
			
			var s:MovieClip = new MovieClip();  
			s.graphics.beginGradientFill(gradientType,gradientColors,gradientAlphas,gradientRatio,matrix);  
			s.graphics.drawRect(0, 0, width, height);
			
			return s;
		}
		
		public function getRadialGradientShape(innerColor:uint,outerColor:uint,width:Number,height:Number,innerAlpha:Number,outerAlpha:Number):MovieClip{
			var gradientType:String = GradientType.RADIAL;
			var matrix:Matrix = new Matrix();
			
			var maxInt:Number;
			var minInt:Number;
			
			if(height > width){
				maxInt = height;
				minInt = width;
			}else{
				maxInt = width;
				minInt = height;
			}
			
			matrix.createGradientBox(maxInt,maxInt,0,0,(- 1 * (maxInt / 2)) + minInt / 2);
			
			var gradientColors:Array = [innerColor, outerColor];
			var gradientAlphas:Array = [innerAlpha,outerAlpha];  
			var gradientRatio:Array = [0,255];  
			
			var s:MovieClip = new MovieClip();  
			s.graphics.beginGradientFill(gradientType,gradientColors,gradientAlphas,gradientRatio,matrix);  
			s.graphics.drawRect(0, 0, width, height);
			
			return s;
		}
		
		public function getOutLineShape(color:uint,thickness:Number,width:Number,height:Number):MovieClip{
			
			var s:MovieClip = new MovieClip(); 
			s.graphics.lineStyle(thickness,color,1,true,"normal","none","miter");
			s.graphics.drawRect((thickness / 2), (thickness / 2), width - thickness, height - thickness);
			
			return s;
		}
	}
}
