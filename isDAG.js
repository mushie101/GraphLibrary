isDAG = (mat, num) => {
for (let i = 0; i < num; i++){
    DFS(i, mat, num)
    }
}


DFS = (source, mat, num) => {
let visited=[]
for (let i = 0; i < num; i++) 
    visited[i] = false; 
DFSRecur(source, visited, mat, num)
}

DFSRecur = (vert, visited, mat, num) => { 
    visited[vert] = true; 
    console.log(vert);   
    for (let i = 0; i< num; i++) { 
        if (mat[vert][i]==1){
        let elem = i; 
        if (!visited[elem]) 
            DFSRecur(elem, visited, mat, num); 
        else{
            console.log("DAG")
            return 1
        }
            
        } 
    } 
}