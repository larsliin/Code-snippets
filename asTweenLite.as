import com.greensock.*;
import com.greensock.easing.*;
TweenLite.to(mc, .5, {x: 200, y: 100, alpha:1, delay:0.9, ease:Quad.easeOut, onStart:function():void{trace('START')}});