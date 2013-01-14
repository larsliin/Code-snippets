package
{
	import flash.display.Bitmap;
	import flash.display.Sprite;
	public class Example extends Sprite
	{
		[Embed('your-image.png')]
		private var ImageAsset	: Class;
 
		public function Example()
		{
			var i:Bitmap = new ImageAsset() as Bitmap;
			addChild( i );
		}
	}
 
}