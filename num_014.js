/*
문제14 : 3의 배수 인가요?

영희는 친구와 게임을 하고 있습니다. 서로 돌아가며 랜덤으로 숫자를 하나 말하고 그게 3의 배수이면 박수를 치고 아니면 그 숫자를 그대로 말하는 게임입니다.

입력으로 랜덤한 숫자 n이 주어집니다.

만약 그 수가 3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력해 주세요.

```
입출력

입력 : 3
출력 : 짝

입력 : 2
출력 : 2
```
*/

//promt 입력

// //입력
// const input = prompt('1이상의 숫자를 입력해주세요 : ');
// let num = Number(input);
// if(num % 3 === 0){
//     //3의 배수 : '짝' 출력
//     console.log('짝');
// }else{
//     //3의 배수 X : 숫자 그대로 출력
//     console.log(num);
// }


//------------------------------------------------------

//readline 입력

//입력
const readline = require("readline");
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('1이상의 숫자를 입력해주세요 : ');

let num = 0;

read.on('line', (line) => {
    const input = line.split(' ');
    //여기서는 1개의 숫자 입력
    num = Number(input);
    read.close();
});

read.on('close', () => {
    //올바른 입력
    if(num > 0){
        if(num % 3 === 0){
            //3의 배수 : '짝' 출력
            console.log('짝');
        }else{
            //3의 배수 X : 숫자 그대로 출력
            console.log(num);
        }
        return;
    }
    //잘못된 입력
    console.log('잘못 입력하셨습니다. 1이상의 숫자를 입력해주세요.')
});

