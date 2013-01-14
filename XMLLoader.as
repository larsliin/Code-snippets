package
{
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.events.HTTPStatusEvent;
	import flash.events.IOErrorEvent;
	import flash.events.ProgressEvent;
	import flash.display.Loader;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	
	public class XMLLoader extends MovieClip
	{
		private var xmlLoader:URLLoader = new URLLoader();
		
		public function XMLLoader(xmlUrl:String):void{
			xmlLoader.load(new URLRequest(xmlUrl));
			
			xmlLoader.addEventListener(Event.COMPLETE, xmlLoadCompleteHandler);
			xmlLoader.addEventListener(IOErrorEvent.IO_ERROR, xmlLoadIOErrorHandler);
			xmlLoader.addEventListener(ProgressEvent.PROGRESS, progresshandler);
			
			// xml load-complete handler
			function xmlLoadCompleteHandler(e:Event):void{
				dispatchEvent(new XMLLoaderEvent(XMLLoaderEvent.LOAD_COMPLETE, e.currentTarget.data));
			}
			
			// xml progress handler
			function progresshandler(e:ProgressEvent):void{
				var o:Object = {bytesLoaded:e.currentTarget.bytesLoaded,bytesTotal:e.currentTarget.bytesTotal}
				dispatchEvent(new XMLLoaderEvent(XMLLoaderEvent.BYTES_LOADED, o));
			}
			
			// dispatch error if xml fails loading
			function xmlLoadIOErrorHandler(e:IOErrorEvent):void{
				dispatchEvent(new XMLLoaderEvent(XMLLoaderEvent.URL_ERROR, null));
			}			
		}		
	}	
}