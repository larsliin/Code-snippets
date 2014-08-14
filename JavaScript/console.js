//https://developer.chrome.com/devtools/docs/console-api
$(document).on('ready', function(){
	var arr = ['dog','cat','bird','fish','giraf','lion','fox','duck','cow'];

	//debugger;

	//console.group('test');

	console.timeline('timeline_label'); // label is optional

	console.time('Array initialize');

	console.groupCollapsed('loggroup');

	for (var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	};

	console.groupEnd();

	console.timelineEnd('timeline_label');

	setTimeout(function(){
		console.timeEnd("Array initialize");
	}, 1000);
});
