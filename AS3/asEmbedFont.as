package
{
	import flash.text.Font;

	public class MyFonts
	{
		[Embed(source = '../fonts/Font1.ttf', fontName = 'Font1', embedAsCFF = 'false')]
		private var Font1 : Class;
		[Embed(source = '../fonts/Font2.ttf', fontName = 'Font2', embedAsCFF = 'false')]
		private var Font2 : Class;
		[Embed(source = '../fonts/Font3.ttf', fontName = 'Font3', embedAsCFF = 'false')]
		private var Font3 : Class;
		private static const MyFonts : Array = ['font1', 'font2', 'font3'];

		public function MyFonts()
		{
			var length : int = MyFonts.length;

			for (var i : int; i < length; i++)
			{
				Font.registerFont(this[MyFonts[i]]);
			}
		}

		private function showStatusMessage(message : String) : void
		{
			var tf : TextField = new TextField();
			var format : TextFormat = new TextFormat();
			format.size = 10;
			format.align = TextFormatAlign.CENTER;
			format.font = "Font1";
			tf.embedFonts = true;
			tf.defaultTextFormat = format;
			tf.text = 'My text';
			tf.antiAliasType = AntiAliasType.ADVANCED;
			addChild(tf);
		}
	}
}