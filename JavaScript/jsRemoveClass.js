// remove class with vanilla javascript
// IE8 supported
function removeClass(el, name) {
    var regex = new RegExp('(^|\\s)' + name + '(\\s|$)', 'gi');
    var newClassName = el.className.replace(regex, ' ');
    
    el.className = trimStr(newClassName);
}

function trimStr(str) {
  return str.replace(/^\s+|\s+$/g, '');
}

// example:
removeClass(document.getElementById('element_id'), 'class-name');
