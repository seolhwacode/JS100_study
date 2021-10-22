/*
[문제2] 배열의 내장함수
<pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.

데이터
var arr = [200, 100, 300];
//pass
console.log(arr);

출력
[200, 100, 10000, 300]
*/

var arr = [200, 100, 300];
//pass
arr.splice(2, 0, 1000);
console.log(arr);

/*
7. **splice()**

[공식문서 - Array.splice](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

- 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경.

```jsx
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```

- parameter
    - start
        - 배열의 변경을 시작할 인덱스.
        - 배열의 길이보다 큰 값이라면 실제 시작 인덱스는 배열의 길이로 설정
        - 음수인 경우
            1. -n이면 요소 끝의 n번째 요소를 가리키며 array.length - n번째 인덱스와 같음
            2. 값의 절대값이 배열의 길이 보다 큰 경우 0으로 설정
    - deleteCount [Optional]
        - 배열에서 제거할 요소의 수
        - 생략하거나 값이 array.length - start보다 크면 start부터의 모든 요소를 제거
        - 0 이하라면 어떤 요소도 제거하지 않는다. 이 때는 최소한 하나의 새로운 요소를 지정해야 한다. (아래의 item 요소 추가 지정 필수)
    - item1, item2, ... [Optional]
        - 배열에 추가할 요소
        - 아무 요소도 지정하지 않으면 splice()는 요소를 제거하기만 한다.
- return
    - 제거한 요소를 담은 배열
    - 하나의 요소만 제거한 경우 길이가 1인 배열을 반환
    - 아무 값도 제거하지 않았으면 빈 배열을 반환
*/
