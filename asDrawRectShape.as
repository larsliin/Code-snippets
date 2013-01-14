public function getRectShape(color : int, width : Number, height : Number) : MovieClip {
	var m : MovieClip = new MovieClip();
	m.graphics.beginFill(color);
	m.graphics.drawRect(0, 0, width, height);
	m.graphics.endFill();
	return m;
}