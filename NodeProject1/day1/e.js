/**
 * http://usejsdoc.org/
 */
//var os = require('os');

////console.log(os.cpus());

//var hostname = os.hostname()
//console.log('hostname : ' + hostname);


var fs = require('fs');

var data = 'korea test 티아카데미';
var fname = 'sam.txt';


//비동기 방식의 파일쓰기
//콜백함수 : 앞에 작업이 끝나면 쓰기 실패냐 성공이냐 나중에 뛰어주는 것
//fs.writeFile(fname, data, function(err){
//if(err){
//console.log('쓰기실패 : ' + err);
//return;
//}
//console.log('쓰기 성공'); //else 대신 리턴해주고, 콘솔찍어줌.
//});

//console.log('tecademy');





//동기 방식
//fs.writeFileSync(fname, data);


console.log('tecademy');

var newData = 'korea';
fs.readFile(fname, (err, data) => {
	if(err){
		console.log('read 실패 : ' + err);
		return;
	}
	newData = data;
	//무조건 위에서 아래로 흘러가지 않는다..콜백되면 그게 마지막으로 실행되기 때문에 ..... 위치가 아주 중요하다.
	console.log('1 :' + newData); // 콘솔을 밖에서 찍지말고, 안에서 찍어야지 값을 불러 올 수 있다. 함수 작업완료 후 찍히기 때문에.
});

console.log('2 :' + newData);