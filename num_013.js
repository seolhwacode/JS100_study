/*
문제13 : 몇 번째 행성인가요?

우리 태양계를 이루고 있는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성으로 총 8개 입니다. 저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다.

입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다. 
출력으로 그 순서에 해당하는 행성의 이름을 출력해 주세요.

예를들어 1이 입력되면, 첫번째 행성인 수성이 출력됩니다.

입출력

입력 : 1
출력 : 수성
*/

// //데이터
// const planets = [ '수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성' ];
// //입력
// const input = prompt('1이상 8이하의 숫자를 입력하세요 : ');
// const num = Number(input);
// //출력
// //출력 - 정상 입력
//  if(num > 0 && num <= 8){
//     console.log(planets[num - 1]);
//     return;
// }
// //출력 - 비정상 입력
// console.log('잘못 입력하셨습니다. 1이상 8이하의 숫자를 입력하세요.');


//데이터
const planets = [ '수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성' ];
//입력
const readline = require("readline");
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('1이상 8이하의 숫자를 입력하세요 : ');
let num = 0;
read.on('line', (line) => {
    let input = line.split(' ');
    num = Number(input);
    read.close();
});

read.on('close', () => {
    //출력 - 정상 입력
    if(num > 0 && num <= 8){
        console.log(planets[num - 1]);
        return;
    }
    //출력 - 비정상 입력
    console.log('잘못 입력하셨습니다. 1이상 8이하의 숫자를 입력하세요.');
});

