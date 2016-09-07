// returns sorted multidimensional array
// sort numeric
var multidimensionalArray = new Array();
multidimensionalArray = [{country : 'Germany', city : 'Berlin'},{country : 'Argentina', city : 'Buenos Aires'}];

function getSortedMultidimensionalArray(a, b) {
    var x = a.country.toLowerCase();
    var y = b.country.toLowerCase();
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
}

console.log(multidimensionalArray.sort(getSortedMultidimensionalArray));

// sort alphabetically
function getSortedData(arr, sortby) {
    return arr.sort(function (a, b) {
        var sorta = a[sortby].toLowerCase(), sortb = b[sortby].toLowerCase();
        if (sorta < sortb)
            return -1;
        if (sorta > sortb)
            return 1;
        return 0;
    });    
}
var names = new Array({ name: 'BOB', sort: 'z' }, { name: 'TOM', sort: 'a' }, { name: 'ROB', sort: 'f' }, { name: 'JON', sort: 'c' });
console.log(getSortedData(names, 'sort'));
