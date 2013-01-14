import flash.net.URLRequest;
import flash.net.navigateToURL;
var gotoURL:String = "http://www.url.com";
var request:URLRequest = new URLRequest(gotoURL);
navigateToURL(request,"_self");