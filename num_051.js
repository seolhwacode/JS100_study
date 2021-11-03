/*

병합정렬(merge sort)은 대표적인 정렬 알고리즘 중 하나로 다음과 같이 동작합니다.

> 1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는

2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.

3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.

4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.
> 

출처 : 위키피디아

다음 코드의 빈칸을 채워 병합정렬을 완성해 봅시다.

```

*/

function mergeSort(arr){
    if (arr.length <= 1){
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    let result = [];

    //왼쪽, 오른쪽 배열 중, 하나라도 배열이 끝나면 끝
    while ((left.length) > 0 && (right.length > 0)){
        //오름차순
        if (left[0] < right[0]){
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    //left 배열이 남아 있을 경우
    //-> right 배열의 수보다 큰 수만 남아 있는 것이므로, result 배열의 맨 뒤에 전부 push
    while (left.length) {
        /*빈칸을 채워주세요*/
        result.push(left.shift());
    }
    if(left.length > 0){
        result.push(...left);
    }
    //right 배열이 남아 있을 경우
    //-> left 배열의 수보다 큰 수만 남아 있는 것이므로, result 배열의 맨 뒤에 전부 push
    while (right.length) {
        /*빈칸을 채워주세요*/
        result.push(right.shift());
    }
    if(right.length > 0){
        result.push(...right);
    }

    return result;
}

// const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

const array = '4 2 3 8 5 1 12 -10 10'.split(' ').map((value) => parseInt(value, 10));

console.log(mergeSort(array));

