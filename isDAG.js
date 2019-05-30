isDAG = (mat, num) => {
for (let i = 0; i < num; i++){
    DFS(i, mat, num)
    }
}


DFS = (source, mat, num) => {
let visited=[]
for (let i = 0; i < num; i++) 
    visited[i] = false; 
DFSRecur(source, visited, mat, chk)
}

DFSRecur = (vert, visited, mat) => { 
    visited[vert] = true; 
    console.log(vert);   
    for (let i = 0; i< num; i++) { 
        if (mat[vert][i]==1){
        let elem = i; 
        if (!visited[elem]) 
            DFSRecur(elem, visited, mat, ); 
        else{
            console.log("DAG")
            break
        }
            
        } 
    } 
}