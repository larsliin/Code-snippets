private function removeAllObjects(mc:*):void{
    while(mc.numChildren){
        mc.removeChildAt(0);
    }
}