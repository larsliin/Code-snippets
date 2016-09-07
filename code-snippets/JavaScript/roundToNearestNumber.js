// finds closests value in array
// ex.: 
// roundTo((100 / 4), 30); // returns 25
function roundTo(increment, value){
    
    return Math.round(value / increment) * increment;
}
