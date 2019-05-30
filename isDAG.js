/* Takes as input adjacency matrix and number of vertices.
Calls DFS on each vertex. */
isDAG = (mat, num) => {
for (let i = 0; i < num; i++){
    DFS(i, mat, num)
    }
}

/* Takes as input source vertex, adjacency matrix and number of vertices.
Initialises empty 'visited' array.
Calls DFSRecur. */
DFS = (source, mat, num) => {
let visited=[]
for (let i = 0; i < num; i++) 
    visited[i] = false; 
DFSRecur(source, visited, mat, num)
}

/* Takes as input source vertex, visited array, adjacency matrix and number of vertices.
Performs DFS and outputs vertex order on console
If already discovered vertex is found again prints 'not DAG' on console. */
DFSRecur = (vert, visited, mat, num) => { 
    visited[vert] = true; 
    console.log(vert);   
    for (let i = 0; i< num; i++) { 
        if (mat[vert][i]==1){
        let elem = i; 
        if (!visited[elem]) 
            DFSRecur(elem, visited, mat, num); 
        else{
            console.log("Not DAG")
            return 1
        }
            
        } 
    } 
}