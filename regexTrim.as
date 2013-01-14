// trim whitespaces from start / end of string
private function trim(str : String) : String
{
	return str.replace(/^\s+|\s+$/g, "");
}