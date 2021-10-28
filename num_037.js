/*
문제37 : 반장 선거 

새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.

```
입력
원범 원범 혜원 혜원 혜원 혜원 유진 유진

출력
혜원(이)가 총 4표로 반장이 되었습니다.
```
*/

//입력
const input = '원범 원범 혜원 혜원 혜원 혜원 유진 유진';

const ClassPresidentElection = class{
    //생성자
    constructor(voteStr){
        //사람들이 뽑은 string -> array 로 변경
        this.voteArr = voteStr.split(' ');
        this.voteObj = {};
        //voteArr 의 정보로 voteObj 생성
        this.createVoteObj();
        //당선자 이름
        this.classMonitorName = '';
        //당선자 투표수
        this.classMonitorVoteCount = 0;
        //당선자의 이름, 투표수 계산
        this.checkClassMonitor();
    }

    //array 의 값에서 같은 것을 count 하여 {'이름': 투표수} 로 이루어진 object 생성
    createVoteObj(){
        this.voteArr.forEach(element => {
            //이미 voteObj 에 존재?
            if(this.voteObj.hasOwnProperty(element)){
                // 존재 -> 해당하는 value + 1
                this.voteObj[element] += 1;
            } else {
                // 존재X -> 새로 만들면서, value = 1
                this.voteObj[element] = 1; 
            }
        });
    }

    //투표 당선자의 key 값 반환
    checkClassMonitor(){
        //key 들 배열로 가져옴
        const keyArr = Object.keys(this.voteObj);
        let mostVotedPeople;
        let mostVotesCount = 0;
        //voteObj 의 모든 값을 순회하면서
        keyArr.forEach((element, index) => {
            //mostVotesCount 보다 큰 값이 있으면
            if(mostVotesCount < this.voteObj[element]){
                //mostVotesCount 값을 해당 값으로 변경
                mostVotesCount = this.voteObj[element];
                //mostVotedPeople 을 해당 key 값(element)으로 변경
                mostVotedPeople = element;
            }
        });
        //결과를 프로퍼티에 저장
        this.classMonitorName = mostVotedPeople;
        this.classMonitorVoteCount = mostVotesCount;
    }

}

let election = new ClassPresidentElection(input);
console.log(`당선자 : ${election.classMonitorName}, 투표수 : ${election.classMonitorVoteCount}`);

// -> 해당 키의 프로퍼티 값이 있는지 확인하는 방법
// let testObj = { a: 1 };
// console.log(testObj.hasOwnProperty('b'));

//-> 배열은 참조값을 전달하므로, Array.from() 또는 array.prototype.slice() 함수를 사용하여 복사한다.
// const test1 = [ 2, 4, 2 ];
// let test2 = test1;
// test2.sort();
// console.log(test1);
// console.log(test2);

