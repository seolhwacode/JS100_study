/*
문제20 : 몫과 나머지

공백으로 구분하여 두 숫자가 주어집니다.
두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

```
입출력

입력 : 10 2
출력 : 5 0
```
*/

let printQR = () => {
    const input = prompt('1 이상의 정수 두 개를 입력해주세요.(실수일 경우 소숫점 버림. 공백으로 구분)').split(' ');
    const numbers = input.map((item) => {
        return Math.floor(Number(item));
    });
    if(numbers[1] === 0){
        console.log('0으로는 나눌 수 없습니다.');
        return;
    }
    const q = Math.floor(numbers[0] / numbers[1]);
    const r = numbers[0] % numbers[1];
    console.log(`${q} ${r}`);
};
printQR();