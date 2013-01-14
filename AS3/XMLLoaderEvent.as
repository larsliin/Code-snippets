package
{
	import flash.events.Event;

	public class XMLLoaderEvent extends Event
	{
		public static const LOAD_COMPLETE:String = "xmlLoaded";
		public static const BYTES_LOADED:String = "xmlBytesLoaded";
		public static const URL_ERROR:String = "xmlUrlError";
		public var data:*;
		
		public function XMLLoaderEvent(type:String, data:*)
		{
			this.data = data;
			super(type);
		}
	}
}