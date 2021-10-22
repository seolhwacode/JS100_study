/*
문제10 : 별 찍기

크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다. 그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다. 온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다. 
하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다. 

은비를 위해 프로그램을 작성해 주세요.

입력
5

출력
    *
   ***
  *****
 *******
*********
*/

//-> 이건 왜 안되나ㅠㅠ
//const input = prompt('숫자를 입력하세요.');

/*
https://rrecoder.tistory.com/60
위 블로그를 참고하였다.
*/
const readline = require("readline");
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('숫자를 입력하세요.');
let num = 0;
read.on('line', (line) => {
    let input = line.split(' ');
    num = Number(input);
    read.close();
});

read.on('close', () => {
    for(let i = 1; i <= num; i++){
        let result = '';
        //라인 앞의 빈칸 : input - 1 부터 0 으로 간다.
        for(let pre = 0; pre < num - i; pre++){
            result += ' ';
        }
        //별의 개수 : 1, 3, 5, ... 2n - 1 개까지 늘어난다.
        for(let star = 0; star < 2 * i - 1; star++){
            result += '*';
        }
        console.log(result);
    }
});

