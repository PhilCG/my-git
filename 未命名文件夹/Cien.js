//import "node_modules/babel-polyfill";
var Cien = function(input, output, method, environment) {
	"use strict";
	this.input = document.getElementsByClassName(input);
	this.output = output;
	this.method = method;
	this.environment = environment;
	//here register the goal of this func.
}
Cien.prototype = {
	constructor: Cien,
	// el: function(){
	// 	input = document.getElementsByClassName(this.input);
	// 	return this
	// },
	log: function(){
		console.log(
			'input = ' + this.input +
			'; output = ' + this.output +
			'; method = ' + this.method +
			'; environment = ' + this.environment
		)
		return this//for chain method
	}
}
// var z = function() {
//     var x = 0;
//     return { 
//     	increment: function(inc) {
//     		x += typeof inc === 'number' ? inc : 1; 
//     	}, 
//     	getX: function() {
//         	return x;
//         }
// 	}
// }()

// (function(global){
//     var myfun1=function(){
//         console.log('myfun1');
//     };
//     var myfun2=function(){
//         console.log('myfun2');
//     };
//     //设置你的命名空间
//     var mypackageName="com.mydomain.utils";
//     var packageArray=mypackageName.split(".");
//     var finalObj=packageArray.reduce(function(prev,current){
//         return prev[current]||(prev[current]={});
//     }, global);
    
//     //将你的函数绑定到命名空间上
//     finalObj.myfun1= myfun1;
//     finalObj.myfun2= myfun2;
    
    
// }(window));



(function(a){console.log(a);return a}('im a'))