// return width/height as Number and remove 'px'
function getStringAsNumber (num) {
	return Number((num.split('px'))[0]);
}
