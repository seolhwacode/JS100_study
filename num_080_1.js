/*
80번 정답
*/

function combination(chars) {
    let combi = [];

    //함수 f : chars 배열의 모든 조합을 만들어 combi 에 추가한다.
    const f = (prefix, chars) => {
        for (let i=0; i<chars.length; i++) {
            combi.push(prefix + chars[i]);

            f(prefix + chars[i], chars.slice(i + 1));
        }
    }

    f('', chars);

    console.log(combi);
    
    //조합의 수에 맞는 것만 추출!
    const result = combi.filter(x => x.length === n);
    console.log(result);

    return result.length;
}

const arr = 'ㄱ,ㄴ,ㄷ,ㄹ'.split(',');
const n = 3;

console.log(combination(arr));