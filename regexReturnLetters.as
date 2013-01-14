// Return all letters/symbols only in string
private function getLettersFromString(str : String) : String
{
	var chars : String = "";
	var regChars : Array = str.match(/\D/g);
			
	for (var i : int = 0; i < regChars.length; i++)
	{
		chars = chars + regChars[i];
	}
			
	return chars;
}