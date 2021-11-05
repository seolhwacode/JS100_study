/*
정답
*/

//1번 답안 - 고전적인 방법 --------------------------------------------

// const obj = {};

// for (let i = 0; i <= 1000; i++) {
//     let tmp = i;
//     while (tmp > 0) {
//         let num = tmp % 10;
//         if (obj[num]) {
//             obj[num]++;
//         } else {
//             obj[num] = 1;
//         }
//         tmp = parseInt(tmp/10, 10);
//     }
// }

// console.log(obj[1]);

//2번 답안 - 정규표현식 사용-------------------------------------------

// //s : 0부터 1000까지 모든 숫자를 하나의 string 으로 연결
// let s = '';
// for(let i = 0; i <= 1000; i++){
//     s += i;
// }
// console.log(s);
// //배열 s 에서 문자 '1' 의 개수를 '모두'(/g 옵션) 찾는다.
// //match() : 대응되는 문자열을 찾는 String 메소드입니다. 정보를 가지고 있는 배열을 반환합니다. 대응되는 문자열을 찾지 못했다면 null을 반환합니다.
// // console.log(s.match(/1/g));
// console.log(s.match(/1/g).length);

// //3번 답안 - for in 사용 --------------------------------------------

// let s = '';
// for(let i = 0; i <= 1000; i++){
//     s += i;
// }
// let count = 0;
// for(let j in s){
//     if(s[j] == 1){
//         count++;
//     }
// }
// console.log(count);

// //4번답안 - for of 사용 ----------------------------------------------

let s = '';
for(let i = 0; i <= 1000; i++){
    s += i;
}
let count = 0;
for(let j of s){
    if (j == 1){
        count++;
    }
}
console.log(count);
