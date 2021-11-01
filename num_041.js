/*
문제41 : 소수판별

숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
(소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)
*/

//parameter : 숫자
//num/2 : 그 이상은 num 을 나누어도 나누어 떨어지지 않는다.
//(나누어 떨어질 경우 : 이미 앞에서 걸린다.)
function checkPrimeNumber(num){
    //1이면 소수가 아니다.
    if(num === 1){
        console.log('No');
        return;
    }
    
    for(let i = 2; i < num / 2; i++){
        //나머지가 0이면 나누어 떨어지는 수가 있는 것
        if(num % i === 0){
            //소수 X
            console.log('No');
            return;
        }
    }
    //통과하면 소수
    console.log('Yes');
}

checkPrimeNumber(6);

