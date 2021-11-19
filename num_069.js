/*
문제69 : 골드바흐의 추측

골드바흐의 추측(Goldbach's conjecture)은 오래전부터 알려진 정수론의 미해결 문제로, 2보다 큰 모든 짝수는 두 개의 소수(Prime number)의 합으로 표시할 수 있다는 것이다. 이때 하나의 소수를 두 번 사용하는 것은 허용한다. - 위키백과

위 설명에서 2보다 큰 모든 짝수를 두 소수의 합으로 나타낸 것을 골드바흐 파티션이라고 합니다.

예)
100 == 47 + 53
56 == 19 + 37

**2보다 큰 짝수 n이 주어졌을 때, 골드바흐 파티션을 출력하는 코드를** 작성하세요. 

* 해당 문제의 출력 형식은 자유롭습니다. 가능하시다면 골드바흐 파티션 모두를 출력하거나, 그 차가 작은 것을 출력하거나 그 차가 큰 것 모두 출력해보세요.
*/

//소수인지 판별하는 함수
function isPrimeNumber(num){
    //소수 : 1보다 큰 자연수 중 1과 자기 자신만을 약수로 가지는 수
    //1은 소수가 X
    if(num === 1){
        return false;
    }
    //2가 아닌 짝수이면 -> false
    if(num !== 2 && num % 2 === 0){
        return false;
    }
    // num ^ 0.5 까지 돌면서 나누어 떨어지는 수가 있는지 확인하기\
    // 앞에서 짝수면 return false 를 했기 때문에 +2 씩 하면 된다.
    for(let i = 3; i <= parseInt(num ** 0.5, 10); i += 2){
        //i 로 나누어진다 -> 소수 X
        if(num % i === 0){
            return false;
        }
    }
    //나누어 떨어지는 수가 없다 -> 소수 -> true
    return true;
}

//num 의 골드바흐 파티션의 배열을 return 하는 함수
function goldbachConjecture(num){
    //모든 파티션을 추가한다.
    //순서 : index 가 커질수록 두 수의 차이가 커진다.
    let result = [];
    //num 을 반으로 나눠 두 수로 나눈다.
    //작은 수 : 무조건 소수점 버림
    let decrease = parseInt(num / 2, 10);
    //큰 수 : 홀수라면 + 1 을 해준다.
    let increase = num % 2 === 0 ? parseInt(num / 2, 10) : parseInt(num / 2, 10) + 1;
    
    //while 문으로 작은 수가 1보다 클 동안만 돈다.
    while(decrease > 1){
        //작은 수(decrease), 큰 수(increase)의 수가 둘 다 소수이며, 둘 의 합이 num 일 때
        if(isPrimeNumber(decrease) && isPrimeNumber(increase) && (decrease + increase === num)){
            //결과 배열의 마지막에 추가
            result.push([decrease, increase]);
        }
        //작은수 : 감소, 큰 수 : 증가
        decrease--;
        increase++;
    }
    //결과 return
    return result;
}

//input
const input = 100;

//결과 배열
const result = goldbachConjecture(input);
console.log(`전체 출력 :\n${result.join(' / ')}`);
console.log(`차가 가장 작은 것 :\n${result.length > 0 ? result[0] : '없음'}`);
console.log(`차가 가장 큰 것 :\n${result.length > 0 ? result[result.length - 1] : '없음'}`);


console.log(isPrimeNumber(9));