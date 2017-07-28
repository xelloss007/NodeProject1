/**
 * http://usejsdoc.org/
 */

//은닉 외부로 빼주면 다른곳에서는 사용(?)
var pri = function(){
	console.log('내부함수');
};

exports.add = function(a,b){
	pri();
	return a + b;
};



var num = 100;		//private
exports.MAX = 100;	//public

