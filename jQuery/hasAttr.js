// returns bool if element has attribute
function hasAttr($e, a){
    var attr = $e.attr(a); 
    var has = (typeof attr !== 'undefined' && attr !== false) ? true : false;
    return has;
}

console.log(hasAttr($myelement, 'id'));
