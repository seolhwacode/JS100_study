/*
문제68 : 버스 시간표

학교가 끝난 지원이는 집에 가려고 합니다. 학교 앞에 있는 버스 시간표는 너무 복잡해서 버스 도착시간이 몇 분 남았는지 알려주는 프로그램을 만들고 싶습니다.

버스 시간표와 현재 시간이 주어졌을 때 버스 도착 시간이 얼마나 남았는지 알려주는 프로그램을 만들어주세요.

- 버스 시간표와 현재 시간이 입력으로 주어집니다.
- 출력 포맷은 "00시 00분"입니다.
   만약 1시간 3분이 남았다면 "01시간 03분"으로 출력해야 합니다.
- 버스 시간표에 현재 시간보다 이전인 버스가 있다면 "지나갔습니다."라고 출력합니다.

```
입력
["12:30", "13:20", "14:13"]
"12:40"

출력
['지나갔습니다', '00시간 40분', '01시간 33분']
```
*/

const busTimetable = ["12:30", "13:20", "14:13"];
const currentTimeInput = '12:40';

// //버스 시간표 배열 복사
// let tmpArray = busTimetable.slice();
// //복사한 배열에 현재 시간 추가
// tmpArray.push(currentTime);
// //복사한 배열 정렬 -> 오름차순
// tmpArray.sort();

//결과 배열 : 버스 시간표에 맞게 지나간 것은 '지나갔습니다.', 아직인 것은 남은 시간 표기
let result = busTimetable.map((value, index) => {
   //이미 지나간 시간표
   if(value < currentTimeInput){
      console.log('지나갔습니다.');
      return '지나갔습니다.'
   }
   //지나가지X -> 남은 시간(string) -> 남은 시간(number)
   //지나가지X -> 남은 분(string) -> 남은 분(number)
   //slice(3) : 분 부분부터 끝까지 복사
   //-> 분단위로 만들기(계산을 위해)
   let busTime = (parseInt(value.slice(0, 2), 10) * 60) +  parseInt(value.slice(3), 10);

   //현재 시간 & 분 자르기 -> 분단위로 만들기(계산을 위해)
   let currentTime = (parseInt(currentTimeInput.slice(0, 2), 10) * 60) + parseInt(currentTimeInput.slice(3), 10);

   // 버스 시간표와 현재 시간의 차이(분 단위)
   let diffHousr = parseInt((busTime - currentTime) / 60, 10);
   let diffMinute = parseInt((busTime - currentTime) % 60, 10);
   
   //남은 시간 & 분 계산하여 result 배열에 추가(return)
   let returnStr = '';
   //시간 한 자리 수
   if(diffHousr < 10){
      returnStr += '0';
   }
   returnStr += `${diffHousr}시간 `;
   //분 한 자리 수
   if(diffMinute < 10){
      returnStr += '0';
   }
   returnStr += `${diffMinute}분`;

   return returnStr;
});

console.log(result);