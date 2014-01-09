// image load complete event
var img = new Image();
img.src = document.getElementById('image_id').src;
img.onload  = function(){
	resizetilesPortrait();
}
