//import "node_modules/babel-polyfill";
(function() {
	"use strict";
	var Cien = function(a){
		var _a = a;
		document.getElementsByClassName(_a);
	};
	var cien = new Cien;
	console.log(Cien);
	return Cien;
}).call(Cien);