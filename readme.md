# JS 문법 정리하기

<br>

## 배열
<br>

docs 주소 : 
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

1. .forEach(callback함수(iten, index, array){})
<br>
배열의 항목들을 순환하며 처리하기

```js
nums.forEach(function(item, index){
    console.log(item, index);
});
```

2. .push()
<br>
배열의 끝에 항목 추가하기

3. .pop()
<Br>
배열의 끝에서부터 항목 제거하기
-> return : 제거한 항목

4. .shift()
<br>
배열의 앞에서부터 항목 제거<Br>
-> return : 제거한 항목

5. .unshift(추가할 항목)
<br>
배열의 앞에 항목 추가하기

6. .indexOf(찾을 항목)
<br>
배열 안 항목의 인덱스 찾기<br>
-> return : 인덱스(number)

7. .splice(시작 index, 삭제할 개수 count)
<br>
인덱스 위치에 있는 항목 제거하기
-> return : 잘라낸 배열

8. slice(시작index, 끝 index)
<br>
배열 복사하여 사본 만들기
-> return : 복사한 배열




