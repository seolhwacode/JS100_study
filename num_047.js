/*
문제47 : set 자료형의 응용

바울랩에서는 3월 29일 제주대학교에서 '제주 빅데이터 사회혁신 해커톤' 행사를 주최하게 되었습니다. 이에 구글 설문지를 배포하였으나 제주대학생들이 중복해서 n개씩 설문지를 제출하였습니다. 
중복된 데이터들을 삭제하여 실제 접수 명단이 몇 명인지 알고 싶습니다.

아래 주어진 데이터들로부터 중복을 제거하여 실제 접수 인원을 출력해 주세요.

```
const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903"
};
```
*/

const people = {
    이호준: "01050442903",
    이호상: "01051442904",
    이준호: "01050342904",
    이호준: "01050442903",
    이준: "01050412904",
    이호: "01050443904",
    이호준: "01050442903"
};


console.log(Object.keys(people).length);

//결과 Set
const peopleSet = new Set();
//순회할 key 배열 가져옴
const keyArr = Object.keys(people);
//object people 순회하면서 모든 값 peopleSet 에 넣기
for(let i = 0; i < keyArr.length; i++){
    peopleSet.add(people[keyArr[i]]);
}

console.log(peopleSet);
console.log(peopleSet.size);
