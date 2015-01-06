var searchStr;
$(document).ready(function(){
	$(".controller").attr('disabled', true);
	
	$('#search_frm').on('submit', onSearch);
	$('#play').on('click', onPlay);
	$('#pause').on('click', onPause);
	$('#previous').on('click', onPrevious);
	$('#next').on('click', onNext);
});

function onPlayTrack(e){
	playTrack($(e.currentTarget).attr('data-track-id'));
	e.preventDefault();
}

function onAddToQueue(e){
	addToQueue($(e.currentTarget).attr('data-track-id'));
	e.preventDefault();
}

function onPlay(e){
	DZ.player.play();
	e.preventDefault();
}

function onPause(e){
	DZ.player.pause();
	
	e.preventDefault();
}

function onPrevious(e){
	DZ.player.prev();
	e.preventDefault();
}

function onNext(e){
	DZ.player.next();
	e.preventDefault();
}

function onSearch(e){
	var term = $('#search_inp').val();
	DZ.api('/search/track?q=' + term, function(response){
		renderResults(response.data);
        console.log(response.data);
    });

	e.preventDefault();
}

function addToQueue(id){
	DZ.player.addToQueue([id]);
}

function playTrack(id){
	DZ.player.playTracks([id]);
}

function renderResults(data){
	var $searchResults =  $('#search_results');
	var title = data.title;

	$searchResults.empty();
	for (var i = 0; i < data.length; i++) {
		$searchResults.append('<table><tr><td><img src="' + data[i].album.cover + '" width="120" height="120" /></td><td><a href="#" class="search-result" data-track-id="' + data[i].id + '">' + data[i].artist.name + '<br />' + data[i].title + '</a><br/><a class="add-to-queue" href="#" data-track-id="' + data[i].id + '">Add to queue</a></td></tr></table>');
	};

	$('.add-to-queue').on('click', onAddToQueue);
	$('.search-result').on('click', onPlayTrack);
}

function onPlayerLoaded() {
	$(".controller").attr('disabled', false);
	console.log('player_loaded');
	DZ.Event.subscribe('current_track', function(arg){
		console.group();
		console.log('current artist:', arg.track.artist.name);
		console.log('current album title:', arg.track.album.title);
		console.log('current track:', arg.track.title);
		console.log('current track no:', arg.index);
		console.groupEnd();
	});
	DZ.Event.subscribe('player_position', function(arg){
		var curr = secondsToTime(Math.round(arg[0]));
		var total = secondsToTime(Math.round(arg[1]));
		$('#time_curr').val(curr.m + ':' + curr.s);
		$('#time_total').val(total.m + ':' + total.s);
		
	});
}

function secondsToTime(secs){
	var hours = Math.floor(secs / (60 * 60));
	
	var divisor_for_minutes = secs % (60 * 60);
	var minutes = Math.floor(divisor_for_minutes / 60);

	var divisor_for_seconds = divisor_for_minutes % 60;
	var seconds = Math.ceil(divisor_for_seconds);
	
	var obj = {
		"h": hours,
		"m": minutes,
		"s": seconds
	};
	return obj;
}

// create an app under My Apps on 
// http://developers.deezer.com/myapps/
DZ.init({
	appId  : 'ID149171',
	channelUrl : 'http://developers.deezer.com/examples/channel.php',
	player : {
		onload : onPlayerLoaded
	}
});