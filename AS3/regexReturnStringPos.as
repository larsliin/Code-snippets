// Return position of first occurrence of any letter/symbol
trace(getPositionOfFirstChar("1234 The quick brown fox"));

private function getPositionOfFirstChar(str : String) : int
{
	var myRegExp : RegExp = /(\D+)/;
	var matchPos1 : int = str.search(myRegExp);

	return matchPos1;
}