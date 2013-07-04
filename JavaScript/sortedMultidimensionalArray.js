// returns sorted multidimensional array

var multidimensionalArray = new Array();
multidimensionalArray = [{country : 'Germany', city : 'Berlin'},{country : 'Argentina', city : 'Buenos Aires'}];

function getSortedMultidimensionalArray(a, b) {
    var x = a.country.toLowerCase();
    var y = b.country.toLowerCase();
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
}

console.log(multidimensionalArray.sort(getSortedMultidimensionalArray));
