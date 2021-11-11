/*
문제68번 답
*/

function solution(버스시간, 기준시간){
    let answer = [];
    기준시간 = 기준시간.split(':').map(n => parseInt(n, 10));
    기준시간 = (기준시간[0] * 60) + 기준시간[1];

    for (let i in 버스시간){
        let time = 버스시간[i].split(':').map(n => parseInt(n, 10));
        time = (time[0] * 60) + time[1];

        if (time < 기준시간){
            answer.push('지나갔습니다');
        } else{
            let 시간 = parseInt((time - 기준시간) / 60, 10);
            let 분 = (time - 기준시간) % 60;
            answer.push(String(시간).padStart(2, 0) + '시간 ' + String(분).padStart(2, 0) + '분');
        }
    }
    return answer;
}

console.log(solution(["12:30", "13:20", "14:13"], "12:40"));
