function getCircle(radius : Number = 100, thickness : Number = 1, color : uint = 0x000000){
	var c:Shape = new Shape();
	c.graphics.lineStyle(thickness,color);
	c.graphics.drawCircle(0,0,radius);
	return c;
}
