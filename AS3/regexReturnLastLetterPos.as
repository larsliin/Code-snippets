// Return position of last occurrence of any letter/symbol
trace(getPositionOfLastChar("The quick brown fox1234"));

private function getPositionOfLastChar(str : String) : int
{
	var myRegExp : RegExp = /(\D)(?!.*(\D))/;
	var matchPos1 : int = str.search(myRegExp);

	return matchPos1;
}