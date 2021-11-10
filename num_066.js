/*
문제66 : 블럭탑쌓기

탑을 쌓기 위해 각 크기별로 준비된 블럭들을 정해진 순서에 맞게 쌓아야 합니다.
순서에 맞게 쌓지 않으면 무너질 수 있습니다.

예를 들면 정해진 순서가 BAC 라면 A 다음 C가 쌓아져야 합니다.
선행으로 쌓아야 하는 블럭이 만족된 경우라면 탑이 무너지지 않습니다.

- B를 쌓지 않아도 A와 C를 쌓을 수 있습니다.
- B 다음 블럭이 C가 될 수 있습니다.

쌓아져 있는 블럭 탑이 순서에 맞게 쌓아져 있는지 확인하세요.

1. 블럭은 알파벳 대문자로 표기합니다.
2. 규칙에 없는 블럭이 사용될 수 있습니다.
3. 중복된 블럭은 존재하지 않습니다.

```
입력
탑 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"]
규칙 = "ABD"

출력
["가능", "불가능", "가능", "가능", "가능"]
```
*/

const tower = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const rule = "ABD";

//정규식 : rule 에 해당하지 않는 모든 값
//g : 정규식에 해당하는 모든 것 찾기
const reg = new RegExp(`[^${rule}]`, 'g');

let towerCopy = tower.map(function(value){    
    //rule 에 해당하지 않는 글 전부 삭제
    let tmp = value.replace(reg, '');
    return tmp;
});

//결과 배열
let result = [];

//rule 을 따르는지 아닌지 체크하는 함수
function isFollowingRule(value, rule){
    //배열의 길이가 1 이하 -> 무조건 규칙 따름
    if(value.length <= 1){
        return true;
    }

    for(let i = 0; i < value.length - 1; i++){
        //해당 i 번째 문자가 rule 에 위치한 index 를 리턴
        //앞의 문자의 index가 뒤의 문자의 index 보다 크면 -> 규칙에 어긋남
        if(rule.indexOf(value[i]) >  rule.indexOf(value[i + 1])){
            //불가능
            return false;
        }
    }
    //끝까지 전부 돌고 나왔다 -> 규칙 따름
    return true;
}

//규칙 따르는지 input 에 확인
towerCopy.forEach((value) => {
    if(isFollowingRule(value, rule)){
        //규칙 따름
        result.push('가능');
    }else{
        //규칙 따르지 않음
        result.push('불가능');
    }
});

console.log(result);

