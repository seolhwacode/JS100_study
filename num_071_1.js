/*
71번 답
*/

const graph = {
    'A': ['E', 'C', 'B'],
    'B': ['A'],
    'C': ['A'],
    'D': ['E','F'],
    'E': ['D', 'A'],
    'F': ['D'],
};

function dfs(graph, start){
    //방문한 순서대로 node 의 값이 들어간다.
    let visited = [];
    //stack 자료 구조 -> 앞으로 가야 할 node 들이 담긴다.
    //1. 처음에는 start 가 담김
    //2. pop 하여 해당하는 node 의 array 를 가져와, 방문한 적 없으면 push
    //3. pop 을 하며 해당 node 에 연결된 array 들을 push 하기 때문에, 깊이 우선 탐색이 된다.
    let stack = [start];

    while (stack.length !== 0){
        //2. pop 하여 노드를 읽어옴
        let n = stack.pop();
        //방문한 node 인가?
        if (!visited.includes(n)){
            //현재 노드는 방문 했음을 표기
            visited.push(n);
            //pop 한 노드에 해당하는 node 의 array 를 filter 를 통해 방문한 적 없는 array 를 생성한다.
            //*해당 node 에 연결된 array 들을 push 하기 때문에, 깊이 우선 탐색이 된다.
            let sub = graph[n].filter(x => !visited.includes(x));
            for(let i of sub) {
                stack.push(i);
            }
        }
    }
    return visited;
}

console.log(dfs(graph, 'E'));