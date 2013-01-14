// Return position of first occurrence of any number
trace(getPositionOfFirstInt("The quick2 brown fox jumps over the lazy dog"));

private function getPositionOfFirstInt(str : String):int
{
	var myRegExp : RegExp = /(\d+)/;
	var matchPos1 : int = str.search(myRegExp);

	return matchPos1;
}