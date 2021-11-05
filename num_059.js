/*
문제59 : 빈칸채우기

총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요.

```
입력
hi

출력
========================hi========================
```
*/

const input = 'hi~!';

//half : (입력받은 string 의 길이를 뺀 값) / 2
const half = (50 - input.length) / 2;

//결과 배열
let result = '';

for(let i = 0; i < half; i++){
    result += '=';
}

//입력한 값 추가
result += input;

//뒤에 마저 추가
for(let i = 0; i < parseInt(half, 10); i++){
    result += '=';
}

console.log(result.length);
console.log(result);

