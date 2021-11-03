/*
문제52 : quick sort

다음 빈 칸을 채워 퀵 정렬을 완성해주세요.
*/

function quickSort(arr){
    if (arr.length <= 1){
        return arr;
    }

    //pivot : pivot 을 기준으로 작은 값은 left, 큰 값은 right
    // 여기서는 pivot 을 [0] 번째 값으로 정해두었다.
    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++){
        //pivot 보다 작으면
        if(arr[i] < pivot){
            //작으면 left
            left.push(arr[i]);
        } else {
            //크거나 같으면 right
            right.push(arr[i]);
        }
    }
    //[left, pivot, right] 형태의 배열 반환
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

const array = '4 2 3 8 5 1 12 -10 10'.split(' ').map((value) => parseInt(value, 10));

console.log(quickSort(array));
