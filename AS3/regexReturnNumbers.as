// Return all numbers only in string
private function getNumbersFromString(str : String) : String
{
	var amount : String = "";
	var regAmount : Array = str.match(/\d/g);
			
	for (var i : int = 0; i < regAmount.length; i++)
	{
		amount = amount + regAmount[i];
	}
			
	return amount;
}