/*
문제73 : 최단 경로 찾기

다음과 같이 노드의 연결 관계가 리스트 형태로 주어집니다. 그다음 경로를 구할 두 정점이 공백으로 구분되어 주어질 것입니다. 

두 정점 사이를 이동할 수 있는 최단 거리를 출력하는 프로그램을 작성해 주세요. 

이때 최단 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 갈 수 있는 가장 적은 간선의 수를 의미합니다.

데이터
graph = {'A': ['B', 'C'],
        'B': ['A', 'D', 'E'],
        'C': ['A', 'F'],
        'D': ['B'],
        'E': ['B', 'F'],
        'F': ['C', 'E']}

입력
A F

출력
2
*/

/*
BFS(너비 우선 탐색)을 활용한 최단거리 찾기
- 가장 처음 end 에 도달하는 count 가 최단거리이다.
- parameter
    - graph : 탐색할 그래프
    - start : 시작할 node
    - end : 도착 node
- return : count(간선의 수)
- 깊이 = count = 이동 거리(간선 수)
- while 문 내부에서 end 까지 가지 못하면 -1 을 return
*/
function shortestPath(graph, start, end){
    //start 와 end 둘 중 하나라도 graph 에 없다면 -> return -1 (최단거리를 찾지 못함)
    if(!graph.hasOwnProperty(start) || !graph.hasOwnProperty(end)){
        return -1;
    }

    //큐
    let queue = [];
    //깊이 count
    let count = 0;
    //지나간 노드 추가
    let path = [];

    //첫 시작 노드 큐에 추가
    queue.push(start);
    //첫 시작 노드를 path 에 추가
    path.push(start);

    //큐가 없어질 때까지 반복
    while(queue.length > 0){
        const queueLen = queue.length;
        //queue에 있는 모든 노드를 순환
        for(let i = 0; i < queueLen; i++){
            //queue의 가장 앞의 node 가져오기
            const node = queue.shift();
            //queue에 들어있는 노드에 연결되어 있는 노드들 순환
            for(const nextNode of graph[node]){
                //해당 노드가 end 일 때 -> 깊이 값(count) return
                if(nextNode === end){
                    //현재 count 는 nextNode 에 들어가지 않은 상태이므로, +1 하여 return
                    return count + 1;
                }

                //path & queue 에 nextNode 추가
                if(!path.includes(nextNode)){
                    queue.push(nextNode);
                    path.push(nextNode);
                }
            }
        }

        //깊이 +1 (거리 증가)
        count++;        
    }
    return -1;
}

//input
let graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

//input
const input = 'A D';

const start = input.slice(0, 1);
const end = input.slice(2, 3);

console.log(shortestPath(graph, start, end));

