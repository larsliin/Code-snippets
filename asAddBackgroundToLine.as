private function drawBackground(_tf : TextField, _color : uint = 0xffffff, _alpha : Number = 1) : void
{
	var _bg : Sprite = new Sprite();
	_bg.mouseChildren = false;
	_bg.mouseEnabled = false;
	var i : int = _tf.numLines;
	if (i > 0)
	{
		while (i--)
		{
			var met : TextLineMetrics = _tf.getLineMetrics(i);
			var lbg : Sprite = lineBackground((met.width + 8), met.height, _color, _alpha);
			lbg.y = (i * lbg.height) + _tf.y;
			lbg.x = met.x - 4;
			_bg.addChild(lbg);
		}
		addChildAt(_bg, 0);
	}
	
	function lineBackground(w : Number, h : Number, c : uint, a : Number = 1) : Sprite
	{
		var s : Sprite = new Sprite();
		s.graphics.beginFill(c);
		s.graphics.drawRect(0, 0, w, h);
		s.graphics.endFill();
		s.alpha = a;
		return s;
	}
}