/*
문제62 : 20190923출력하기

`20190923`을 출력합니다.  아래 기준만 만족하면 됩니다.

1. 코드 내에 숫자가 없어야 합니다.
    - 예) console.log(20190923)이라고 하시면 안됩니다.
2. 파일 이름이나 경로를 사용해서는 안됩니다.
3. 시간, 날짜 함수를 사용해서는 안됩니다.
4. 에러 번호 출력을 이용해서는 안됩니다.
5. input을 이용해서는 안됩니다.
*/

// 도저히 생각을 못해서 답지를 봤습니다. 
// 아스키 코드를 사용하는 것인가? 고민했지만, 사용을 못해서...
// 재밋는 문제인 것 같습니다.

//abcdefgh
//20190923
const user_s = 'aacdddddddddfffffffffgghhh';
let result_s = '';

console.log(`${user_s.match(/a/g).length}${Number(user_s.match(/b/g))}${user_s.match(/c/g).length}${user_s.match(/d/g).length}${Number(user_s.match(/e/g))}${user_s.match(/f/g).length}${user_s.match(/g/g).length}${user_s.match(/h/g).length}`);
