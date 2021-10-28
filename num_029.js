/*
문제29 : 대문자만 지나가세요

진구는 영어 학원 아르바이트를 하고 있습니다. 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다.

알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.

*/

function isUpper(input){
    //소문자 -> false
    if(input >= 'a'){
        return false;
    } else if(input >= 'A'){
        //대문자 -> true
        return true;
    }
    //그 외의 입력 -> false 로 return
    return false;
}

const input = prompt('알파벳 한 글자를 입력해주세요.');
console.log(isUpper(input) ? 'Yes' : 'No');