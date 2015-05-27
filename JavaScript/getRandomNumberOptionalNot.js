// return a non zero indexed number between 1 and 'length' (both included)
// 'not' being optional 
function getRandomInt(length, not) {
    var arr, ret, c = 0;        
    if (not != undefined) {
        arr = new Array(length);
        for (var i = 0; i < arr.length; i++) {
            arr[i] = i + 1;
        }
        arr.splice(not - 1, 1);
        ret = arr[Math.round(Math.random() * (arr.length - 1))];
    } else {
        ret = Math.round(Math.random() * (length - 1)) + 1;
    }
    return ret;
}
