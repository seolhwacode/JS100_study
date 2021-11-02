/*
문제46 : 각 자리수의 합 2

1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요. 

예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고 
각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)
*/

//내가 생각한 답

//1 ~ 20까지 숫자를 문자열string 으로 만들기
let input = '';
for(let i = 1; i <= 20; i++){
    input += i;
}

//문자열 한 글자씩 떼어내어 숫자로 만들어 더하기
let result = 0;
for(let i = 0; i < input.length; i++){
    result += Number(input[i]);
}

console.log(result);

//--------------------------------------------
//[정답] : 102

// let arr = [];
// let sum = 0;

// for (let i=0; i<20; i++){
//   arr[i] = i+1;
// }

// arr.forEach((n) => {
//   while(n !== 0){
//     sum += (n % 10);
//     n = Math.floor(n/10);
//   }
// })

// console.log(sum);
