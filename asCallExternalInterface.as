package 
{
	import flash.external.ExternalInterface;
	import flash.display.MovieClip;
	import flash.events.Event;

	public class EIFace1 extends Sprite
	{
		public function EIFace1()
		{
			addCallbacks();

			this.addEventListener(Event.ADDED_TO_STAGE, addedToStageHandler);
		}

		private function addedToStageHandler(event : Event):void
		{
			sendToJS();
		}

		private function addCallbacks():void
		{
			if (ExternalInterface.available)
			{
				ExternalInterface.addCallback("sendToFlash", fromJS);
			}
		}

		private function fromJS():void
		{
			addChild(createRectShape(0xff00ff, 200, 200));
		}

		private function sendToJS():void
		{
			if (ExternalInterface.available)
			{
				ExternalInterface.call("fromAS", "loaded");
			}
		}

		public function createRectShape(color : int, width : Number, height : Number):MovieClip
		{
			var shape : MovieClip = new MovieClip();

			shape.graphics.beginFill(color);
			shape.graphics.drawRect(0, 0, width, height);
			shape.graphics.endFill();

			return shape;
		}
	}
}