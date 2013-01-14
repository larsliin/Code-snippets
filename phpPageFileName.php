function getPageFileName(){
	$currentFile = $_SERVER["PHP_SELF"];
	$parts = Explode('/', $currentFile);
	return $parts[count($parts) - 1];
}