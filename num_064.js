/*
문제64 : 이상한 엘레베이터

정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다.
화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.

예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는
7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.

입력
정량 N이 입력됩니다.

출력
가장 적게 옮길 수 있는 횟수를 출력합니다.
만약 어떻게 해도 정량이 N이 되지 않는다면 -1을 출력합니다.
*/

const input = 24;
const big = 7;
const samll = 3;

// 7kg 로 최대한 많이 옮기고, 나머지를 3kg 로 채운다.
// => 7로 나눈 나머지의 값이 3의 배수이면 된다.
function leastMoveCount(){
    // moveBig : 7kg 을 옮기는 수
    for(let moveBig = parseInt(input / big, 10); moveBig >=0; moveBig--){
        let remain = input - (moveBig * big);
        if(remain % samll === 0){
            //count 수 return
            return moveBig + parseInt(remain / samll, 10);
        }
    }
    //여기로 나오면 -> 어떻게 해서든 input 값을 만들 수 없음
    return -1;
}

console.log(leastMoveCount(input));

