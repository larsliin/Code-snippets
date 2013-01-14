public function getOutLineShape(color:uint,thickness:Number,width:Number,height:Number):MovieClip{
			
	var s:MovieClip = new MovieClip(); 
	s.graphics.lineStyle(thickness,color,1,true,"normal","none","miter");
	s.graphics.drawRect((thickness / 2), (thickness / 2), width - thickness, height - thickness)	return s;
}