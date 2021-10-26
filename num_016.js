/*
문제16 : 로꾸거
문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

```
입출력

입력 : 거꾸로
출력 : 로꾸거
```
*/

//입력 : prompt

// //1) Array 의 from() 함수, toString() 함수 사용하기
// let input = prompt('입력 : ');
// let inputArr = Array.from(input);
// console.log(inputArr.reverse().toString());

// //2) Array 의 from() 함수, join() 함수 사용하기
// let input = prompt('입력 : ');
// let reverseStr = Array.from(input).reverse().join();
// console.log(reverseStr);

// //3) string 의 split() 함수, join() 함수 사용하기
// let input = prompt('입력 : ');
// let reverseStr = input.split('').reverse().join();
// console.log(reverseStr);

//--------------------------------------------------

//입력 : readline

const readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('문장 입력 : ');
read.on('line', (line) => {
    //line : 읽어들인 string
    //string -> array -> reverse -> string
    const reverseStr = line.split().reverse().join();
    //출력
    console.log(reverseStr);
});


