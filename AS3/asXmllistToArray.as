public function xmlListToArray(xmllist : XMLList) : Array
{
    var a : Array = [], i : String;
    for (i in xmllist) a[i] = xmllist[i].toString();;
    return a;
}