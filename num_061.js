/*
문제61 : 문자열 압축하기

문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

```
입력
aaabbbbcdddd

출력
a3b4c1d4
```
*/

const input = 'aaabbbbcdddd';

let result = [];

for(let i = 0; i < input.length; i++){
    //result 배열의 가장 마지막에 해당 값이 존재
    if((result.length !== 0) && (result[result.length - 1][0] === input[i])){
        //값 증가
        result[result.length - 1][1] += 1;
    }else{
        //없음 -> 값 추가
        //[해당 문자, 1]
        result.push([input[i], 1]);
    }
}

let output = '';
result.forEach((item) => {
    output = output + item[0] + item[1];
});

console.log(output);
