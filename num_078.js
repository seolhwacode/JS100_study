/*
문제78 : 원형 테이블

기린은 중국집에서 친구들과 만나기로 하고, 음식을 시켰습니다.
음식이 나오고 한참을 기다렸지만 만나기로 한 친구 2명이 오지 않았어요.

기린은 배가 너무 고파 혼자 음식을 먹기 시작합니다. 원형 테이블에는 N 개의 음식들이 있습니다.
한 개의 음식을 다 먹으면 그 음식의 시계방향으로 K 번째 음식을 먹습니다.
하지만 아직 오지 않은 친구들을 위해 2개의 접시를 남겨야 합니다.

마지막으로 남는 음식은 어떤 접시인가요?

```
입력은 2개의 정수로 이루어지며 공백으로 구분되어 입력됩니다.
첫 번째 숫자가 음식의 개수 N, 두 번째 숫자가 K입니다.
첫 번째 가져가는 음식이 K 번째 음식이며 나머지는 첫 번째 음식으로부터 시계방향으로 가져갑니다.

입력
6 3


남은 음식들의 번호를 배열의 형태로 출력합니다.

출력
[3, 5]
```
*/

/*
n : 음식의 수
k : 시계방향으로 k 번째 음식을 먹는다.
leaveCount : 남길 음식 수

return : result : 먹고 남은 음식의 배열
*/
function eatKthFood(n, k, leaveCount){
    //음식을 나열한 배열
    let result = [];
    //1 ~ n 까지 숫자를 배열에 초기화
    for(let i = 0; i < n; i++){
        result.push(i + 1);
    }
    //가장 처음 먹을 음식 번호(index X)
    let currentFood = 1;
    //result 배열의 길이(=음식의 개수)가 남길 음식의 수(leaveCount) 보다 클 동안만 반복
    while(result.length > leaveCount){
        //현재 먹을 음식의 index
        let index = result.indexOf(currentFood);
        //음식을 먹음 = result 배열에서 제거
        result.splice(index, 1);
        //다음에 먹을 음식
        //index + k - 1 = 다음에 먹을 음식의 index (현재 음식을 먹어 현재 index 포함이므로 -1 한다.)
        let nextIndex = index + k - 1;        
        //배열을 넘어가면, 배열의 가장 앞으로 돌아감
        if(nextIndex >= result.length){
            nextIndex -= result.length;
        }
        //음식 번호 변경
        currentFood = result[nextIndex];
    }
    //결과 배열 return
    return result;
}

//input
const input = '6 3'.split(' ');
//음식의 개수
const n = parseInt(input[0], 10);
//시계방향으로 k 번째 음식을 먹는다.
const k = parseInt(input[1], 10);

//output
console.log(eatKthFood(n, k, 2));


