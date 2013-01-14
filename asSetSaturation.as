var matrix:Array = new Array();
matrix=matrix.concat([0.5,0.5,0.5,0,0]);// red
matrix=matrix.concat([0.5,0.5,0.5,0,0]);// green
matrix=matrix.concat([0.5,0.5,0.5,0,0]);// blue
matrix=matrix.concat([0,0,0,1,0]);// alpha
var my_filter : ColorMatrixFilter = new ColorMatrixFilter(matrix);

mc.filters = [my_filter];