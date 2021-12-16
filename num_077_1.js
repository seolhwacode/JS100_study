/*
77번 정답
*/

//해당 배열의 모든 subsequence 를 잘라서 result 에 저장하는 함수
function sol(string){
    let result = [];
    for (let i=1; i<string.length+1; i++){
        for (let j=0; j<i; j++){
            result.push(string.slice(j, j+string.length-i+1));
        }  
    }
    return result;
}
    
// const inputOne = prompt('첫번째 문자열을 입력해주세요.');
// const inputTwo = prompt('두번째 문자열을 입력해주세요.');
const inputOne = 'THISISSTRINGS';
const inputTwo = 'THISIS';
const arrayOne = sol(inputOne);
const arrayTwo = sol(inputTwo);

//공통 부분 문자열 찾기- 교집합
let intersection = arrayOne.filter(x => arrayTwo.includes(x));

//문자열 길이로 내림차순 정렬
intersection.sort((a,b)=>{
    return b.length-a.length;
});

// console.log(arrayOne);
// console.log(arrayTwo);
// console.log(intersection);
console.log(intersection[0].length);