/*
문제19 : 제곱을 구하자

공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

*/

const numbers = prompt('숫자 두 개를 입력해주세요.(공백으로 구분)').split(' ');
const result = Math.pow(numbers[0], numbers[1]);
console.log(result);

