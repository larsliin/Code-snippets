function getRandomArray(length, maxlength){
  var arr = []
	while(arr.length < length){
		var randomnumber=Math.ceil(Math.random()*maxlength)
		var found=false;
		for(var i=0;i<arr.length;i++){
			if(arr[i]==randomnumber){
				found=true;
				break
			}
		}
		if(!found)arr[arr.length]=randomnumber;
	}
	return arr;
}
