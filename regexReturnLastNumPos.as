// Return position of last occurrence of any number
trace(getPositionOfLastInt("123The quick brown fox jumps over the lazy dog"));

private function getPositionOfLastInt(str : String):int
{
	var myRegExp : RegExp = /(\d)(?!.*(\d))/;
	var matchPos1 : int = str.search(myRegExp);

	return matchPos1;
}