/*
문제15 : 자기소개

신학기가 시작되고, 아이들이 돌아가면서 자기소개를 하기로 했습니다.

만약 입력으로 김다정이라는 이름이 주어지면 "안녕하세요. 저는 김다정입니다."라고 출력하게 
해주세요.

```
입출력

입력 : 김다정
출력 : 안녕하세요. 저는 김다정입니다.
```
*/

//prompt 입력

// //입력
// const name = prompt('이름을 입력해주세요 : ');
// //출력
// console.log('안녕하세요. 저는 "' + name + '" 입니다.');


//--------------------------------------------

//readline 입력

const readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let name = '';

console.log('이름을 입력해주세요 : ');
//입력이 끝나고 난 직후(enter키 누른 직후) 실행할 함수 지정
read.on('line', (line) => {
    name = line;
    read.close();
});

//close 가 호출된 후에 실행할 동작
read.on('close', () => {
    console.log('안녕하세요. 저는 "' + name + '" 입니다.');
});

