var speed = 1000;
$('#animate-element').stop().animate({
	height : 0
}, speed, function() {
	onCompleteHandler();
});
function onCompleteHandler(){
}