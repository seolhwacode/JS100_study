/*
문제27 : 객체 만들기

첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.

```
입력
Yujin Hyewon
70 100

출력
{'Yujin': 70, 'Hyewon': 100}
```
*/


/*
- names 의 배열의 길이가 더 긴 경우
    - scores 의 길이가 더 짧기 때문에, index 에 해당하는 값이 없어 NaN이 들어간다.
    - NaN이 들어가는 이유 : forEach문을 돌면서 Number() 를 사용하여 number 자료형으로 명시적 형변환을 진행하였기 때문. (형변환을 하지 않았다면, undefined 가 들어갈 것이라 예상)
*/

const names = prompt('학생들의 이름을 입력해주세요.(공백으로 구분).').split(' ');
const scores = prompt('해당 학샏들의 수학 점수를 입력해주세요.(공백 구분)').split(' ');
let resultObj = {};
names.forEach((item, index) => {
    resultObj[item] = Number(scores[index]);
});
console.log(resultObj);
