function getCircle(radius : Number = 100, stroke : Number = 1, strokecolor : uint = 0x000000) : Shape{
	var c:Shape = new Shape();
	c.graphics.lineStyle(stroke,strokecolor);
	c.graphics.drawCircle(0,0,radius);
	return c;
}

function getRoundShape(radius : Number = 100, color : uint = 0x000000) : Shape{
	var c:Shape = new Shape();
	c.graphics.beginFill(color);
	c.graphics.drawCircle(0,0,radius);
	c.graphics.endFill();
	return c;
}
