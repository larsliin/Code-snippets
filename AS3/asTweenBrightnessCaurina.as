// http://hosted.zeh.com.br/tweener/docs/en-us/
import com.caurina.transitions.Tweener;
import com.caurina.transitions.properties.ColorShortcuts;
ColorShortcuts.init();
Tweener.addTween(this, {_brightness:1, time:1, transition:"easeOutQuad"});