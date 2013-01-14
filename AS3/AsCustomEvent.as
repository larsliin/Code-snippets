package
{
	import flash.events.Event;

	/**
	 * @author larlii
	 */
	public class CustomEvent extends Event
	{
		public static const CUSTOM_EVENT_1 : String = "customEvt1";
		public static const CUSTOM_EVENT_2 : String = "customEvt2";
		public var params : *;

		public function CustomEvent($type : String, $params : Object, $bubbles : Boolean = true, $cancelable : Boolean = false)
		{
			super($type, $bubbles, $cancelable);
			this.params = $params;
		}

		public override function clone() : Event
		{
			return new CustomEvent(type, this.params, bubbles, cancelable);
		}

		public override function toString() : String
		{
			return formatToString("CustomEvent", "params", "type", "bubbles", "cancelable");
		}
	}
}
