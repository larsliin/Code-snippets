// resizes to fullscreen, centers with overflow
//http://stackoverflow.com/questions/8158012/how-to-scale-an-image-to-full-screen-using-javascript
function resizeElement(image) : void {
	var widthRatio : Number = stage.stageWidth / ORG_WIDTH;
	var heightRatio : Number = stage.stageHeight / ORG_HEIGHT;
	var ratio : Number = widthRatio;
	var top : Number;
	var left : Number;
	
	if (widthRatio * ORG_HEIGHT < stage.stageHeight) {
		ratio = heightRatio;
		top = 0;
		left = ((ORG_WIDTH * ratio) - stage.stageWidth) / 2;
	}else{
		top = ((ORG_HEIGHT * ratio) - stage.stageHeight) / 2;
		left = 0;
	}
	
	image.x = - 1 * left;
	image.y = - 1 * top;
	image.width = ORG_WIDTH * ratio;
	image.height = ORG_HEIGHT * ratio;
}
