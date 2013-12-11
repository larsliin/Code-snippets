console.log(getImgSize('Images/1429330_42555763.jpg'));

function getImgSize(src){
	var img = new Image();
	img.src = src;	
	return {height : img.height, width : img.width};
}
