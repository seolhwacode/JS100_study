/*
문제44 : 각 자리수의 합

사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요

예를들어
18234 = 1+8+2+3+4 이고 정답은 18 입니다.
3849 = 3+8+4+9 이고 정답은 24입니다.

```
입출력

입력 : 18234
출력 : 18

입력 : 3849
출력 : 24
```
*/

const input = 18234;
const input2 = 3849;

function addDigits(num){
    let result = 0;
    while(num > 0){
        //10으로 나눈 나머지 더하기(맨 뒷자리수부터 덧셈)
        result += num % 10;
        //num = 10으로 나눈 몫
        num = Math.floor(num / 10);
    }
    console.log(result);
}

addDigits(input);
