import flash.net.NetConnection;
import flash.net.NetStream;
import flash.media.Video;
import flash.media.SoundTransform;
import flash.events.NetStatusEvent;

private var videoPlayer:Video;

var nc:NetConnection
var ns:NetStream;

var customClient:Object = new Object();
customClient.onMetaData = metaDataHandler;

nc = new NetConnection();
nc.connect(null);

ns = new NetStream(nc);
ns.addEventListener(NetStatusEvent.NET_STATUS, onNetStatusHandler);
ns.client = customClient;

videoPlayer = new Video(512,288);
videoPlayer.name = "videoPlayer";

videoPlayer.attachNetStream(ns);

ns.play("http://www.helpexamples.com/flash/video/cuepoints.flv");

addChild(videoPlayer);

function onNetStatusHandler(evt:NetStatusEvent):void
{
    
}

function metaDataHandler(infoObject:Object):void 
{
}
