import "node_modules/babel-polyfill";
(function(){
	var Cien = function(a){
		let _a = a.toString();
		if(_a.indexOf('#',[0])){
			document.getElementById(_a);
		}
		else if(_a.indexOf('.',[0])){
			document.getElementsByClassName(a);
		}
		else{
			return
		}
	};

}).call(Cien)