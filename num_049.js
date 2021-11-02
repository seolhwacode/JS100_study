/*
문제49 : 최댓값 구하기

순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.

```
입출력

입력 : 10 9 8 7 6 5 4 3 2 1
출력 : 10
```
*/

//입력 : 띄어쓰기로 구분
const input = '10 9 8 7 6 5 4 3 2 1';

//배열로 만들기
const inputArr = input.split(' ').map((value) => {
    return Number(value);
});

//최댓값
let maxNum = inputArr[0];
for(let i = 0; i < inputArr.length; i++){
    //배열의 값이 maxNum 보다 크면 maxNum 변경
    if(maxNum < inputArr[i])
        maxNum = inputArr[i];
}

// console.log(inputArr);
console.log(maxNum);

