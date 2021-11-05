/*
56번 정답
*/

const nationWidth = {
	'korea': 220877,
	'Rusia': 17098242,
	'China': 9596961,
	'France': 543965,
	'Japan': 377915,
	'England' : 242900,
};

//korea 의 면적 저장
const w = nationWidth['korea'];

//nationWidth 의 객체에서 'korea'를 key 로 가진 프로퍼티를 삭제
delete nationWidth['korea'];

//[[key, value], [key, value], ...] 배열을 return
const entry = Object.entries(nationWidth);
//[value, value, ...] object 의 value 들을 배열로 return
const values = Object.values(nationWidth);

/*
Math.max(...values)
- values 들의 최댓값을 얻을 수 있다.
- Math.max(배열) : 이렇게 사용하면 NaN 을 반환한다.
- 스프레드 연산자인 '...' 을 사용해야한다.
*/

/*
var max = values.reduce(function(a, b) {
    return Math.max(a, b);
});
- 최댓값을 찾는데 reduce 함수를 사용할 수 있다.
*/

//gap에 최댓값 저장 : values 배열의 최댓값을 저장
let gap = Math.max.apply(null, values);

//결과 값을 저장할 배열
let item = [];

//i : index
for (let i in entry){
    //entry[i][1] : value 값
    if (gap > Math.abs(entry[i][1] - w)){
        gap = Math.abs(entry[i][1] - w);
        //entry[i] : [key, value] 값
        item = entry[i];
    }
}

// console.log(item);
console.log(item[0], item[1] - w);