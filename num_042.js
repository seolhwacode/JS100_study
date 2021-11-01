/*
문제42 : 2020년

2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

제한 조건
2020년은 윤년입니다.
2020년 a월 b일은 실제로 있는 날입니다. 
(13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)
*/

//a : a월
//b : b일
//a월 b일은 실제로 있는 날만 들어온다는 가정이므로, 검사를 따로 하지 X
function checkDay(a, b){
    //1월부터 a-1월까지 일수 합치기
    let day = 0;
    //31 가진 달들
    const day31 = [ 1, 3, 5, 7, 8, 10, 12 ];
    //30일 가진 달들
    const day30 = [ 4, 6, 9, 11 ];
    for(let i = 1; i < a; i++){
        //31일
        if(day31.indexOf(i) >= 0){
            console.log('31일');
            day += 31;
        }else if(day30.indexOf(i) >= 0){
            //30일
            console.log('30일');
            day += 30;
        }else{
            //2월 : 29일(윤년)
            console.log('29일');
            day += 29;
        }
    }

    //날짜 더하기
    day += b;

    //7로 나눈 나머지 : 0(화요일), 1(수요일), 2(목요일), 3(금요일), 4(토요일), 5(일요일), 6(월요일)
    switch(day % 7){
        case 0:
            console.log('TUE');
            break;
        case 1:
            console.log('WED');
            break;
        case 2:
            console.log('THU');
            break;
        case 3:
            console.log('FRI');
            break;
        case 4:
            console.log('SAT');
            break;
        case 5:
            console.log('SUN');
            break;
        case 6:
            console.log('MON');
            break;
    }
}

checkDay(8, 30);
