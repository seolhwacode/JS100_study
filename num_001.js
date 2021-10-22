/*
[문제1] 배열의 삭제
다음 배열에서 400, 500을 삭제하는 code 를 입력하세요.
var nums = [100, 200, 300, 400, 500];
*/

/*
[배열]
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

1. .forEach(callback함수(iten, index, array){})
배열의 항목들을 순환하며 처리하기
nums.forEach(function(item, index){
    console.log(item, index);
});

2. .push()
배열의 끝에 항목 추가하기

3. .pop()
배열의 끝에서부터 항목 제거하기

4. .shift()
배열의 앞에서부터 항목 제거

5. .unshift(추가할 항목)
배열의 앞에 항목 추가하기

6. .indexOf(찾을 항목)
배열 안 항목의 인덱스 찾기

7. .splice(시작 index, 삭제할 개수 count)
인덱스 위치에 있는 항목 제거하기
-> return : 잘라낸 배열

8. slice(시작index, 끝 index)
배열 복사하여 사본 만들기

*/

var nums = [100, 200, 300, 400, 500];
/*
1. pop : 배열의 뒤에서부터 하나씩 항목 제거
-> return : 잘라낸 항목
*/
nums.pop();
nums.pop();

/*
2. splice : 인덱스 위치에 있는 항목 제거하기
.splice(시작 index, 삭제할 개수 count)
-> return : 잘라낸 배열
*/
nums.splice(3, 2);

/*
3. slice : (출처 : 근영오빠)
- slice(시작index, 끝 index)
- 배열 복사하여 사본 만들기
- return : 복사한 배열
*/
const result = nums.slice(0, 3);

console.log(nums);

