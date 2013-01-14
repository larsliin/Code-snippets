private function loadXml() : void
{
	// load xml
	var xmlLoader : XMLLoader = new XMLLoader('xmlurl.xml');

	// set xml load listener
	xmlLoader.addEventListener(XMLLoaderEvent.LOAD_COMPLETE, xmlLoadCompleteHandler, false, 0, true);
	xmlLoader.addEventListener(XMLLoaderEvent.URL_ERROR, xmlErrorHandler, false, 0, true);
}

private function xmlErrorHandler(event : XMLLoaderEvent) : void
{
}

private function xmlLoadCompleteHandler(event : XMLLoaderEvent) : void
{
	CONFIG.DATA = new XML(event.data);

	build();
}