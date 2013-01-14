var obj = {'prop1' : 'val1', 'prop2' : 'val2', 'prop3' : 'val3'}
var arr = [];
var i = 0;
for(var val in obj)
{
    arr[i] = obj[val];
    i++;
}