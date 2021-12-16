/*
문제77 : 가장 긴 공통 부분 문자열

가장 긴 공통 부분 문자열(Longest Common Subsequence)이란 A, B 두 문자열이 주어졌을 때 두 열에 공통으로 들어 있는 요소로 만들 수 있는 가장 긴 부분열을 말합니다. 여기서 부분열이란 다른 문자열에서 몇몇의 문자가 빠져 있어도 순서가 바뀌지 않은 열을 말합니다.

예를 들어 S1 = ['T', 'H', 'I', 'S', 'I', 'S', 'S', 'T', 'R', 'I', 'N', 'G', 'S']  S2 = ['T', 'H', 'I', 'S', 'I', 'S']라는 두 문자열이 있을 때 둘 사이의 부분 공통 문자열의 길이는 ['T', 'H', 'I', 'S', 'I', 'S']의 6개가 됩니다.

이처럼 두 문자열이 주어지면 가장 긴 부분 공통 문자열의 길이를 반환하는 프로그램을 만들어 주세요.

두 개의 문자열이 한 줄에 하나씩 주어집니다. 문자열은 알파벳 대문자로만 구성되며 그 길이는 100글자가 넘어가지 않습니다.

출력은 이 두 문자열의 가장 긴 부분 공통 문자열의 길이를 반환하면 됩니다.

```
- Test Case -

입력
THISISSTRINGS
THISIS

출력
6

-

입력
THISISSTRINGS
TATHISISKKQQAEW

출력
6

-

입력
THISISSTRINGS
KIOTHIKESSISKKQQAEW

출력
3

-

입력
THISISSTRINGS
TKHKIKSIS

출력
3
```
*/

//가장 긴 공통 부분 문자열(Longest Common Subsequence)
function compareString(sentence1, sentence2, index1, index2){
    //공통 부분 문자열의 길이
    let commonSeqLen = 1;
    //해당 
    while((index1 + commonSeqLen < sentence1.length) && (index2 + commonSeqLen < sentence2.length)){
        //두 문장을 비교하였을 때 다른 문자
        if(sentence1[index1 + commonSeqLen] !== sentence2[index2 + commonSeqLen]){
            break;
        }
        //공통 문장 길이 증가
        commonSeqLen++;
    }
    //return : 공통 부분 문자열의 길이
    return commonSeqLen;
}

//두 문장을 순환하면서 같은 부분을 찾기
function longestComSubseq(sentence1, sentence2){
    //가장 긴 공통 부 분 문자열의 길이
    let max = 0;
    //sentence1 기준으로 검사
    for(let i = 0; i < sentence1.length; i++){
        //sentence1 의 index 에 해당하는 문자가 sentence2 에 처음 존재하는
        //index j 부터 확인 시작
        //존재하지 X -> -1 반환
        let j = sentence2.indexOf(sentence1[i]);
        //일치하는 index j 가 -1 이 될 때까지 반복
        while(j !== -1){
            //공통 부분 문자열 길이 체크 -> return 공통 부분 문자열의 길이
            const result = compareString(sentence1, sentence2, i, j);
            //최대값 max 보다 result 가 크면 max 변경
            if(max < result){
                max = result;
            }
            //다음으로 일치하는 index j 구하기
            j = sentence2.indexOf(sentence1[i], j + 1);
        }
    }
    return max;
}

//input
const testCases = [
    ['THISISSTRINGS', 'THISIS'],
    ['THISISSTRINGS', 'TATHISISKKQQAEW'],
    ['THISISSTRINGS', 'KIOTHIKESSISKKQQAEW'],
    ['THISISSTRINGS', 'TKHKIKSIS']
]

testCases.forEach((test, index) => {
    console.log(`${index + 1} 번`);
    console.log(`1) ${test[0]}\n2) ${test[1]}`);
    console.log(`결과 : ${longestComSubseq(test[0], test[1])}\n`);
});


