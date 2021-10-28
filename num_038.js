/*
문제38 : 호준이의 아르바이트

호준이는 아르바이트로 영어 학원에서 단어 시험지를 채점하는 일을 하고 있다. 호준이가 일하는 학원은 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다. 그런데 오늘은 마침 사탕이 다 떨어져서 호준이가 채점을 하고 점수를 보내면, 당신이 아이들의 숫자만큼 사탕을 사러 가기로 했다.

1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.

```
입출력

입력 : 97 86 75 66 55 97 85 97 97 95
출력 : 6
```
*/

//입력
const input = '97 86 75 66 55 97 85 97 97 95';

//sort : 오름차순으로 정렬하기
let sortedScoreArr = input
    .split(' ')
    .map((value) => Number(value))
    .sort((a, b) => {
        return b - a;
    });

/* 1. 내가 처음 생각했던 로직 */

//사탕을 받을 사람 수 count
let count = 1;
//등수
let rank = 1;

for(let i = 1; i < sortedScoreArr.length; i++){
    //현재 점수와 이전 점수 비교 : 현재 점수가 이전보다 낮다.
    if(sortedScoreArr[i] < sortedScoreArr[i - 1]){
        //rank 올라감
        rank++;
    }
    //현재 rank 가 3보다 크면 -> 끝
    if(rank > 3) break;

    //현재 rank 가 3 이하 -> 사탕 줄 인원 증가
    count++;
}

// console.log(sortedScoreArr);
console.log(count);

//--------------------------------------------------------------------------------------

/* 2. reduce() 를 사용해볼 생각으로 만들어봄 */

//등수
let rank = 1;

/* Array.prototype.reduce() 함수 사용해보기 */
let result = sortedScoreArr.reduce((count, currentValue, currentIndex, array) => {
    //currentIndex = 0 -> 이전 값이 없으므로, count 는 가장 아래의 return 을 따른다.
    //현재 값이 이전 index 값보다 작으면
    if((currentIndex !== 0) && (currentValue < array[currentIndex - 1])){
        //rank 올라감
        rank++;
    }

    //등수가 3보다 커지면 -> 현재까지 더한 인원수를 return
    if(rank > 3) return count;
    
    //등수가 3등 이하면 -> 인원수 + 1 return
    return count + 1;
}, 0);

console.log(sortedScoreArr);
console.log(result);

//--------------------------------------------------------------------------------------

/* 3. 정답 */

const scores = input.split(' ').map(function(n){
    return parseInt(n, 10);
});

//오름차순 정렬
scores.sort((a, b) => {
    return a-b;
});

// console.log(scores);

//count : 사탕을 줄 사람 수
let count = 0;
//arr : 중복을 허락하지 않은 1등부터 순서대로 들어가는 점수 값을 담은 배열
// -> 같은 값이 들어기지 X : 배열의 길이 = 등수
let arr = [];

//배열의 길이 = 등수
//등수가 4등이 되면 실행하지 X
while (arr.length < 3) {
    //배열의 가장 뒤의 값 빼내기
    let n = scores.pop();
    //빼낸 값이 arr 에 들어 있지 X
    if (!arr.includes(n)){
        //배열에 해당 점수 추가
        arr.push(n);
    }
    //사람 수 + 1
    count += 1;
}

console.log(count);