/**
 * http://usejsdoc.org/
 */

console.time('sTime');

var sum = 0;
var i;
for(i = 0; i < 10000; i++){
	sum += i;
}
console.log(` sum : ${sum}`);
console.timeEnd('sTime');

// 작업경로 구할 때 현재위치를 구하기 쉽다
console.log('filename : ' + __filename);
console.log('dirname : ' + __dirname);