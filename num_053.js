/*
문제53 : 괄호 문자열

괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말한다. 그중 괄호의 모양이 바르게 구성된 문자열을 바른 문자열, 그렇지 않은 문자열을 바르지 않은 문자열이라 부르도록 하자. 

(())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열이다.
(해당 문제에서는 소괄호만 판별하지만,  중괄호와 대괄호까지 판별해 보세요.)

입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.
*/

function isCorrectBracket(inputArr){
    //열리는 괄호를 push
    let leftBracket = [];
    for(let i = 0; i < inputArr.length; i++){
        //열리는 괄호
        if(inputArr[i] === '(' || inputArr[i] === '{' || inputArr[i] === '['){
            //leftBracket 에 push
            leftBracket.push(inputArr[i]);
        }

        //닫히는 괄호
        if(inputArr[i] === ')' || inputArr[i] === '}' || inputArr[i] === ']'){
            //열리는 괄호가 없을 경우 -> false
            if(leftBracket.length === 0)
                return false;

            //leftBracket 에서 가장 마지막의 열리는 괄호
            const bracket = leftBracket.pop();
            //leftBracket 에서 가장 마지막의 열리는 괄호와 페어가 맞는가?
            //-> 페어 맞지 X -> return false
            switch(bracket){
                case '(':
                    if(inputArr[i] !== ')')
                        return false;
                    break;
                case '{':
                    if(inputArr[i] !== '}')
                        return false;
                    break;
                case '[':
                    if(inputArr[i] !== ']')
                        return false;
                    break;
            }
        }
    }

    //배열의 모든 값 순회 후
    //-> 열리는 괄호 leftBracket 에 값이 남음 -> 다 닫히지 않은 괄호가 존재 -> false
    if(leftBracket.length > 0)
        return false;

    //-> 열리는 괄호인 leftBracket 배열의 길이가 0이어야 true
    return true;
}

const input = '(([]){()})'.split('');

console.log(isCorrectBracket(input) ? 'YES' : 'NO');

