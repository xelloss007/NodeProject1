/**
 * http://usejsdoc.org/
 */


// const = final 할당된 값 말곤 쓰지못한다.
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/*외부 함수
 * add, sub, multi, divide 함수를 생성해서
 * 그 함수를 불러와서 실행하는 소스 구현
 * (인자는 두개씩)
 * 외부함수의 이름 calc.js
 * 실행하느 함수는 calcTest.js
 */