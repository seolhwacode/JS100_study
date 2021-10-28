/*
문제34 : sort 구현하기

민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 

민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
(키는 공백으로 구분하여 입력됩니다.)

```
입출력

입력 : 176 156 155 165 166 169
출력 : NO

입력 : 155 156 165 166 169 176
출력 : YES
```
*/

const testArr1 = [ 176, 156, 155, 165, 166, 169 ];
const testArr2 = [ 155, 156, 165, 166, 169, 176 ];

function isSorted(inputArr){
    //0 ~ length - 1 까지 확인
    for(let i = 0; i < inputArr.length - 1; i++){
        // i번째 값이 i + 1 번째 값보다 크면, 키가 작은 순서대로 정리된 것이 아니다.
        // -> return false
        if(inputArr[i] > inputArr[i + 1]){
            return false;
        }
    }
    //위를 전부 통과 -> 전부 키 순서대로 서 있다.
    //-> return true
    return true;
}

console.log(isSorted(testArr1) ? 'YES' : 'NO');
console.log(isSorted(testArr2) ? 'YES' : 'NO');


