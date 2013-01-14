public function getTextField(width : Number) : TextField
{
	var tf : TextField = new TextField();
	tf.width = width;
	tf.selectable = false;
	tf.mouseEnabled = false;
	tf.multiline = false;
	
	return tf;
}