// Return position of first occurrence of any string in string
trace(getPositionOfString("The quick brown fox jumps over the lazy dog", "fox"));

private function getPositionOfString(str : String, match : String) : int
{
	var matchPos1 : int = str.search(match);
	
	return matchPos1;
}