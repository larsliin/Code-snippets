// returns bool if element has attribute
function hasAttr($elem, attr){
    return typeof $elem.attr(attr) !== 'undefined' && $elem.attr(attr) !== false ? true : false;
}

console.log(hasAttr($myelement, 'id'));
