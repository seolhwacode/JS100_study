/*
문제80 : 순열과 조합

조합이란 원소들을 조합하여 만들 수 있는 경우의 수이며 원소의 순서는 신경 쓰지 않습니다.
순열이란 원소의 값이 같더라도 순서가 다르면 서로 다른 원소로 취급하는 선택법입니다.

한글의 자모 24자 중 자음은 총 14개입니다.
이 중 입력받은 자음을 n 개를 선택하여 나올 수 있는 모든 조합과, 조합의 수를 출력하고 싶습니다.

‘한글 맞춤법’의 제2장 제4항에서는 한글의 기본 자모 24자 “ㄱ(기역), ㄴ(니은), ㄷ(디귿), ㄹ(리을), ㅁ(미음), ㅂ(비읍), ㅅ(시옷), ㅇ(이응), ㅈ(지읒), ㅊ(치읓), ㅋ(키읔), ㅌ(티읕), ㅍ(피읖), ㅎ(히읗), ㅏ(아), ㅑ(야), ㅓ(어), ㅕ(여), ㅗ(오), ㅛ(요), ㅜ(우), ㅠ(유), ㅡ(으), ㅣ(이)”를 제시

나올 수 있는 모든 조합을 아래와 같이 출력해 주세요.

<--요구 조건-->
1. 첫 번째 입력으로 선택할 한글 자음이 주어집니다.
2. 두 번째 입력으로 조합의 수가 주어집니다.
3. 주어진 조합의 수에 따라 조합과 조합의 수를 출력해 주세요.

```
입력
ㄱ,ㄴ,ㄷ,ㄹ
3

출력
['ㄱㄴㄷ', 'ㄱㄴㄹ', 'ㄱㄷㄹ', 'ㄴㄷㄹ']
4
```
*/

//자음 조합
/*
items : 자음 모음
count : 조합의 수
result : 결과를 넣을 배열
item : 만들고 있는 자음 조합 배열
index : 현재 추가할 자음의 items 의 index(위치)
*/
function combination(items, count, result, item, index){
    //조합한 item 의 길이가 count 일 때
    if(item.length === count){
        //결과 배열에 추가
        result.push(item);
        return;
    }

    //현재 위치인 index 가 items 배열을 벗어나면
    if(index >= items.length){
        return;
    }

    //현재 index의 자음 추가
    item += items[index];

    for(let i = index + 1; i < items.length + 1; i++){
        //다음 자음을 추가
        combination(items, count, result, item, i);
    }
}


//input
let input = 'ㄱ,ㄴ,ㄷ,ㄹ'.split(',');
const count = 3;

//결과 배열
let result = [];

for(let i = 0; i <= input.length - count; i++){
    //item 의 첫 글자를 지정 -> input[i]
    //i + 1 부터 자음 배열에 추가
    combination(input, count, result, input[i], i + 1);
}

console.log(result);
console.log(result.length);
