/*
문제48 : 대소문자 바꿔서 출력하기

문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

```
입출력

입력 : AAABBBcccddd
출력 : aaabbbCCCDDD
```
*/

const input = 'AAABBBcccddd';

let result = input.split('');

for(let i = 0; i < result.length; i++){
    //소문자 : 소문자 -> 대문자
    if(/[a-z]/.test(result[i])){
        result[i] = result[i].toUpperCase();
    }else if(/[A-Z]/.test(result[i])){
        result[i] = result[i].toLowerCase();
    }
}

console.log(`입력 : "${input}"`);
console.log(`결과 : "${result.join('')}"`);

