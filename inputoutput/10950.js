var fs = require('fs');

var T = fs.readFileSync('/dev/stdin').toString().split('\n');
var count = parseInt(T[0]);
for(var i = 0; i < count; i++){
    var line = T[i + 1].split(' ');
    console.log(parseInt(line[0]) + parseInt(line[1]));
}

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var a = parseInt(input[0]);
for(var i=0;i<a;i++){
	var C = (input[i+1]).split(' ');
	console.log(parseInt(C[0])+parseInt(C[1]));
}