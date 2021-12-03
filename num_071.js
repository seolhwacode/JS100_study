/*
문제71 : 깊이 우선 탐색(DFS)


깊이 우선 탐색이란 목표한 노드를 찾기 위해 가장 우선순위가 높은 노드의 자식으로 깊이 들어갔다가 
목표 노드가 존재하지 않으면 처음 방문한 노드와 연결된 다른 노드부터 그 자식 노드로 파고드는 검색 방법을 말합니다.

다음과 같이 리스트 형태로 노드들의 연결 관계가 주어진다고 할 때 깊이 우선 탐색으로 이 노드들을 탐색했을 때의 순서를 공백으로 구분하여 출력하세요.

```
데이터
graph = {'E': ['D', 'A'],
        'F': ['D'],
        'A': ['E', 'C', 'B'],
        'B': ['A'],
        'C': ['A'],
        'D': ['E','F']}


출력
E D F A C B
```
*/

//깊이 우선 탐색
//grapth : 주어지는 그래프
//currentNode : 탐색을 시작 할 노드 지정
//result : 깊이 우선 탐색 결과
function dfs(graph, result, currentNode){
    //해당 노드가 그래프에 존재하는지 확인
    if(!graph.hasOwnProperty(currentNode)){
        //존재 X
        return;
    }
    //존재 O
    //해당 노드를 순회 하였는가는 재귀하기 전에 체크
    //-> 즉, 현재 노드가 순회하였다는 경우는 없음

    //해당 노드를 들렸다고 result 에 추가
    result.push(currentNode);
    
    //노드의 끝 : 노드의 길이가 1 => 부모 말고는 연결된 노드가 없음 => 끝
    if(graph[currentNode].length === 1){       
        return;
    }

    //현재 노드와 연결된 노드들을 순서대로 깊이 우선 탐색
    graph[currentNode].forEach(element => {
        //확인할 노드를 이미 순회 하였는지 확인 -> 순회 하지 않은 것만 dfs 한다.
        if(!result.includes(element)){
            dfs(graph, result, element);
        }
    });
}

//input
const graph = {
    'E': ['D', 'A'],
    'F': ['D'],
    'A': ['E', 'C', 'B'],
    'B': ['A', 'H', 'G'],
    'C': ['A'],
    'D': ['E','F', 'I'],
    'G': ['B'],
    'H': ['B'],
    'I': ['D']
};

//result : 해당 노드를 들린 적이 있다면 -> 해당 node 의 값을 추가
//결국, 순서대로 추가된다.
//해당 배열에 들어갔다면 -> 이미 순회했으므로, 다시 순회할 필요가 없다.
let output = [];

//output : 그래프, 시작 node
dfs(graph, output, 'A');
console.log(output.join(' '));
