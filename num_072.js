/*
문제72 : 너비 우선 탐색(BFS)


너비 우선 탐색이란 어떤 노드를 방문하여 확인한 후, 목표한 노드가 아니면 그 노드와 연결된 정점들 중에서 우선순위가 동일한 다른 노드를 찾고 
그 순위에 없으면 그다음 순위 노드를 차례대로 찾는 방법이다.

다음과 같이 입력이 주어질 때 너비 우선 탐색을 한 순서대로 노드의 인덱스를 공백 구분으로 출력하세요.

```
데이터
graph = {'E': ['D', 'A'],
        'F': ['D'],
        'A': ['E', 'C', 'B'],
        'B': ['A'],
        'C': ['A'],
        'D': ['E','F']}

출력
E D A F C B
```
*/

function bfs(graph, searchResult, start){
    //노드를 담을 큐
    let queue = [];

    //시작 노드를 큐에 넣기
    queue.push(start);

    //큐가 빌 때까지 반복
    while(queue.length > 0){
        //큐에 제일 처음 넣은 노드를 꺼낸다.
        const node = queue.shift();
        //꺼낸 노드가 결과 배열에 없으면
        if(!searchResult.includes(node)){
            //결과 배열에 노드 추가
            searchResult.push(node);
        }
        //꺼낸 노드와 연결된 노드가 1개 => 가장 끝의 leaf node
        if(graph[node].length === 1){
            //아래의 for 문을 실행하지 X
            continue;
        }
        //꺼낸 노드와 인접한 노드들 중, 결과 배열에 없는 것을 queue 에 push
        graph[node].forEach(element => {
            //결과 배열에 해당 노드가 없으면
            if(!searchResult.includes(element)){
                //결과 배열에 노드 추가
                queue.push(element);
            }
        });
    }
}

//input
const graph = {
    'E': ['D', 'A'],
    'F': ['D'],
    'A': ['E', 'C', 'B'],
    'B': ['A'],
    'C': ['A'],
    'D': ['E','F']
};

//결과 배열
let result = [];
//bfs
bfs(graph, result, 'E');
//출력
console.log(result);
