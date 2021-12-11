/*
문제74 : 최장 경로 찾기

다음과 같이 노드의 연결 관계가 주어집니다. 
입력으로는 경로를 구할 두 정점의 번호가 공백으로 구분되어 주어집니다. 
우리는 이 두 정점으로 가기 위한 최대 거리를 구하고자 합니다. 

최대 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 경유할 수 있는 가장 많은 간선의 수를 뜻합니다.

```
데이터
graph = {1: [2, 3, 4],
    2: [1, 3, 4, 5, 6],
    3: [1, 2, 7],
    4: [1, 2, 5, 6],
    5: [2, 4, 6, 7],
    6: [2, 4, 5, 7],
    7: [3, 5, 6]}


입력
1 7

출력
6
```
*/

/*
dfs 를 사용하여 최장거리를 구하는 함수
- parameter
    1. graph : 탐색할 그래프
    2. end : 도착점
    3. currentNode : 현재  노드
    4. path : 지나온 노드들 저장
- return : 최장거리
*/
function longestPathUsingDfs(graph, end, currentNode, path){
    //currentNode 가 end 에 도착
    if(currentNode === end){
        //현재 노드까지의 path 의 노드의 개수
        return path.length;
    }

    //currentNode 가 path 에 있는 node
    if(path.includes(currentNode)){
        //max 를 구하기 때문에, 다른 것과 비교하여도 적은 음수를 return 하였음
        //최종 return 이 -1 이 되면 -> end 까지 갈 수 있는 길이 없음을 뜻함
        return -1;
    }else{
        //현재 노드를 path 에 추가
        path.push(currentNode);
    }    

    //currentNode 에서 end 까지의 최장거리들의 array
    let maxLengthes = [];

    //currentNode 에 연결된 모든 노드들을 순회한다.
    for(const nextNode of graph[currentNode]){
        //currentNode 에서 end 까지의 최장거리들을 lengthes 에 추가한다.
        maxLengthes.push(longestPathUsingDfs(graph, end, nextNode, path));
    }
    
    //모든 경로들 중 가장 긴 거리를 return
    return Math.max(...maxLengthes);
}

/*
DFS 를 사용하여 순회하기 전에 start 와 end 의 유효성을 체크한다.
*/
function longestPath(graph, start, end){
    //시작 or 끝이 graph 에 없으면 -> return -1
    if(!graph.hasOwnProperty(start) || !graph.hasOwnProperty(end)){
        console.log('X');
        return -1;
    }

    let path = [];
    return longestPathUsingDfs(graph, end, start, path);
}

//graph
const graph = {
    1: [2, 3, 4],
    2: [1, 3, 4, 5, 6],
    3: [1, 2, 7],
    4: [1, 2, 5, 6],
    5: [2, 4, 6, 7],
    6: [2, 4, 5, 7],
    7: [3, 5, 6, 8],
    8: [7, 9, 10],
    9: [8, 10],
    10: [8, 9],
    11: []
};

//input
const input = '1 15';
//배열로 만들기
const inputArr = input.split(' ');
/*
graph 에서 node 가 전부 숫자이기 때문에, path 에 숫자들이 저장된다.
만약, start 와 end 를 숫자로 바꾸지 않으면?
-> start 와 end 를 '===' 연산자를 사용하여 비교할 때 
    '문자'와 '숫자'를 비교하기 때문에 false 만 반환하게 된다.
*/
//시작점 -> 숫자로 만들어야한다.
const start = parseInt(inputArr[0], 10);
//도착점 -> 숫자로 만들어야한다.
const end = parseInt(inputArr[1], 10);

console.log(longestPath(graph, start, end));

