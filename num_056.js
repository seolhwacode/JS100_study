/*
문제56 : 객체의 함수 응용

다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

```
데이터
nationWidth = {
     'korea': 220877,
     'Rusia': 17098242,
     'China': 9596961,
     'France': 543965,
     'Japan': 377915,
     'England' : 242900,
}

출력
England 22023
```
*/

nationWidth = {
    'korea': 220877,
    'Rusia': 17098242,
    'China': 9596961,
    'France': 543965,
    'Japan': 377915,
    'England' : 242900,
};

//korea 의 면적과 차이 최솟값 저장(절대값)
let smallestDiff = NaN;
//korea 의 면적과 차이가 최소인 나라 이름
let country = '';

for(let key in nationWidth){
    console.log(key);
    //key 가 korea 면 뛰어넘음
    if(key === 'korea'){
        continue;
    }
    
    // if(smallestDiff === NaN)
    //-> NaN은 === 비교가 아닌 Number.isNaN() 함수를 사용해서 비교해야한다.
    
    //smallestDiff 가 아직 값이 없음 -> 처음 비교일 때
    if(Number.isNaN(smallestDiff)){
        //차이값을 바로 저장
        smallestDiff = Math.abs(nationWidth['korea'] - nationWidth[key]);
        //나라 이름도 저장
        country = key;
    }else{
        //현재 나라와 korea 비교
        let diff = Math.abs(nationWidth.korea - nationWidth[key]);
        //원래 있던 최솟값보다 작다면
        if(diff < smallestDiff){
            //최솟값 변경
            smallestDiff = diff;
            //나라 이름 변경
            country = key;
        }
    }
}

console.log(`${country} ${smallestDiff}`);

