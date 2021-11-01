/*
문제43 : 10진수를 2진수로

우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?

사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.

*/

const input = 3;

function tenToTwo(num){
    let result = [];
    while(num > 0){
        //숫자를 2로 나눈 나머지 : 앞에 추가
        result.unshift(num % 2);
        //숫자를 2로 나눈 몫
        num = Math.floor(num / 2);
    }
    console.log(result.join(''));
}

tenToTwo(input);
