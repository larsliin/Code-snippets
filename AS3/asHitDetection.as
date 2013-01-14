var stagePoint:Point = this.localToGlobal(new Point(mouseX, mouseY)); 

trace(container.hitTestPoint(stagePoint.x, stagePoint.y, true));

if(container.hitTestPoint(stagePoint.x, stagePoint.y, true)){
    trace("IS TRUE");
}else{
    trace("IS FALSE");
}