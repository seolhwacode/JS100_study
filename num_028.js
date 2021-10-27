/*
문제28 : 2-gram

2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다. 

예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

```
입력
Javascript

출력
J a
a v
v a
a s
s c
c r
r i
i p
p t
```

입력으로 문자열이 주어지면 2-gram으로 출력하는 프로그램을 작성해 주세요.
*/

function printTwoGram(str){
    for(let i = 0; i < str.length; i++) {
        //index 가 가장 마지막이면 ->  끝!
        if(i === str.length - 1){
            return;
        }

        //현재 index 값, index + 1 의 값을 출력
        console.log(`${str[i]} ${str[i + 1]}`);
    }
}

const readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

read.on('line', (line) => {
    printTwoGram(line);
    //입력 종료
    read.close();
});


