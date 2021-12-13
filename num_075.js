/*
문제75 : 이상한 369
369 게임을 하는데 조금 이상한 규칙이 있습니다. 3이나 6, 9 일 때만 박수를 쳐야합니다. 예를 들어 13, 16과 같이 3과 6, 9 만으로 된 숫자가 아닐 경우엔 박수를 치지 않습니다.
수현이는 박수를 몇 번 쳤는지 확인하고 싶습니다. 36일 때 박수를 쳤다면 박수를 친 횟수는 5번입니다.
n을 입력하면 박수를 몇 번 쳤는지 그 숫자를 출력해주세요.
```
입력
'93'

출력
10
```
*/

/*
3 6 9 
33 36 39 
63 66 69
93 96 99
333 336 339 363 366 369 393 396 399
*/
//num : 만들고 있는 숫자의 string ex) '369'
//result : 숫자를 만든 후에 넣을 결과 배열
//digitCount : 자릿 수
function create369(num, result, digitCount){
    //현재 만든 num 의 자릿수가 digitCount 와 같음
    if(num.length === digitCount){
        //result 에 num 을 number 로 변경하여 push
        result.push(parseInt(num, 10));
        return;
    }
    //3, 6, 9를 num 맨 뒤에 붙임
    create369(num + '3', result, digitCount);
    create369(num + '6', result, digitCount);
    create369(num + '9', result, digitCount);
}

function strange369(input){
    //input : string -> number 로 변경
    let end = parseInt(input, 10);
    //숫자의 자릿수
    let digitCount = input.length;

    //자릿수에 해당하는 3,6,9 로만 만들어진 숫자 만들기
    let nums = [];
    //자릿수에 해당하는 숫자들을 만듬
    create369('', nums, digitCount);
    //오름차순 정렬
    nums.sort((a, b) => a - b);
    //배열에서 input 입력한 수가 어디에 해당하는지 찾기
    let count = nums.filter((element) => element <= end).length;

    //자릿수 - 1 만큼의 369 숫자의 개수 = 3 ^ 자릿수 -> 더하기
    for(let i = 1; i < digitCount; i++){
        count += Math.pow(3, i);
    }
    
    return count;
}

//input
const input = '100';
console.log(strange369(input));


// let test = '36'.replaceAll(/[369]/g, ' ');
// console.log(test);

