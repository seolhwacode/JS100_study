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
    //1. 행렬의 길이가 없으면 -> 계산 못함
    //2. n X m, p X q 행렬일 때, m 과 p 가 같아햐 계산 가능
    // 계산 X -> -1 리턴
    if(a.length === 0 || b.length === 0 || a[0].length !== b.length){
        return -1;
    }
    //계산 가능
    //결과
    let result = [];
    //왼쪽 행렬 a : n x m 의 n 만큼 반복
    for(let n = 0; n < a.length; n++){
        let row = [];
        for(let q = 0; q < b[0].length; q++){
            //합
            let sum = 0;
            for(let m = 0; m < b.length; m++){
                sum += a[n][m] * b[m][q];
            }
            row.push(sum);
        }
        result.push(row);
    }
    //계산 결과 출력
    console.log(result);
}

//실패하면 -1 출력
console.log(multiplyMatrix(a, b) === -1 ? -1 : '계산 완료');
