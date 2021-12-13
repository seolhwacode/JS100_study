/*
정답
*/

function sol(n){
    let answer = 0;
    let count = 1;
    const d = {3 : 1, 6 : 2, 9 : 3};
    
    while (n.length !== 0){
        answer += d[parseInt(n.pop(), 10)] * count;
        count *= 3;
    }       
    return answer;
}

const user_input = '95'.split('');

console.log(sol(user_input));