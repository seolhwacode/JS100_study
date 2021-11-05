/*
정답
*/

// 내장함수 사용
const n = '123456789';
parseInt(n, 10);

console.log(n.toLocaleString());

// 재귀함수 사용
function comma(s) {
    if (s.length <= 3) {
        return s;
    } else {
        return comma(s.slice(0, s.length - 3)) + ',' + s.slice(s.length - 3);
    }
}

console.log(comma(n));