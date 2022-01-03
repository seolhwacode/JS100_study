/*
다음의 값이 주어졌을 때
l = [10, 20, 25, 27, 34, 35, 39]

n번 순회를 결정합니다. 예를 들어 2번 순회하면
l = [35, 39, 10, 20, 25, 27, 34]

여기서 변하기 전 원소와 변한 후 원소의 값의 차가 가장 작은 값을 출력하는 프로그램을 작성하세요.

예를 들어 2번 순회했을 때 변하기 전의 리스트와 변한 후의 리스트의 값은 아래와 같습니다.

순회전_리스트 = [10, 20, 25, 27, 34, 35, 39]
순회후_리스트 = [35, 39, 10, 20, 25, 27, 34]
리스트의_차 = [25, 19, 15, 7, 9, 8, 5]

39와 변한 후의 34 값의 차가 5이므로 리스트의 차 중 최솟값입니다. 따라서 39와 34의 인덱스인 6과 39와 34를 출력하는 프로그램을 만들어주세요.

```
입력
순회횟수는 : 2

출력
index : 6
value : 39, 34

---

입력
순회횟수는 : 3

출력
index : 5
value : 35, 25
```
*/

//inN 번 rotate 한 inL 배열을 return
function rotate(inL, inN){
	//<빈칸을 채워주세요>
    //1. 변경한 결과 저장할 배열
    let result = inL.slice();
    //2. inN % inL.length -> 의 값만큼 오른쪽으로 이동
    const moveCount = inN % result.length;
    //3. splice 로 index 0부터 inL.length - moveCount 만큼의 길이를 잘라낸다.
    let tmp = result.splice(0, result.length - moveCount);
    //4. 매뒤에 잘라낸  배열 붙이기
    result.push(...tmp);
    //5. 변경한 배열 return
    return result;
}

//원본과 회전 후의 차를 구해, 최소인 값의 index 와 배열의 값 출력
function printSmallestDiff(origin, rotated){
    //가장 처음의 차이의 절댓값
    let smallestDiff = Math.abs(origin[0] - rotated[0]);
    //최솟값의 index
    let smallestIndex = 0;
    for(let i = 1; i < origin.length; i++){
        const diff = Math.abs(origin[i] - rotated[i]);
        //최솟값 & index 변경
        if(diff < smallestDiff){
            smallestDiff = diff;
            smallestIndex = i;
        }
    }
    console.log(`index : ${smallestIndex}`);
    console.log(`value : ${origin[smallestIndex]}, ${rotated[smallestIndex]}`);
}

//input
const l = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
const input = '3';
const n = parseInt(input, 10);

//배열 회전
const rotatedL = rotate(l, n);
//결과 출력
printSmallestDiff(l, rotatedL);


