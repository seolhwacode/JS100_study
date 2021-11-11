/*
문제70 : 행렬 곱하기

행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 곱할 수 있다면 그 결과를 출력하고,
곱할 수 없다면 -1을 출력하는 프로그램을 만들어주세요.

```
입력
a = [[1, 2],
		[2, 4]]

b = [[1, 0],
		[0, 3]]

출력
[[1, 6], [2, 12]]
```
*/

const a = [[1, 2], [2, 4]];
const b = [[1, 0], [0, 3]];

function multiplyMatrix(a, b){
    // n X m, p X q 행렬일 때, m 과 p 가 같아햐 계산 가능
    // 계산 X -> -1 리턴
    if(a[0].length !== b.length){
        return -1;
    }
    //계산 가능
    //결과
    let result = [];
    for(let i = 0; i < a.length; i++){
        let sum = 0;
        for(let j = 0; j < b.length; j++){
            sum += a[i][j] * b[j][i];
        }
        
    }
}

console.log(multiplyMatrix(a, b));
