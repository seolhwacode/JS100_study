/*
문제58 : 콤마 찍기

원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.

숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.

예를 들어, 123456789를 입력받았으면 123,456,789를 출력해야 합니다.
*/

const input = 123456789;

//결과값을 넣을 배열
let result = [];

//계산을 위한 임시 값
let tmp = input;
//몇 번째 값인지 체크
let count = 0;

while(tmp > 0){
    //맨 뒤의 자리수를 result 배열의 맨 앞에 추가
    result.unshift(tmp % 10);
    //count 증가
    count++;
    //count가 3의 배수 -> 콤마 추가
    if(count % 3 === 0){
        //result 배열의 맨 앞에 콤마 추가
        result.unshift(',');
    }
    //tmp 맨 뒷자리 떼기
    tmp = parseInt(tmp / 10, 10);
}

//맨 앞자리가 ',' 가 되면
if(result[0] === ','){
    //',' 떼기
    result.shift();
}

console.log(result.join(''));
