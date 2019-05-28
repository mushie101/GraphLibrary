//DFSStack = (mat, num) => {
//for (var i = 0; i < num; i++){
//    let recurStack = []

//    }


//}


DFS = (source, mat, num) => {
let visited=[]
for (var i = 0; i < num; i++) 
    visited[i] = false; 
DFSRecur(source, visited, mat)
}

DFSRecur = (vert, visited, mat) => { 
    visited[vert] = true; 
    console.log(vert);   
    for (var i = 0; i< num; i++) { 
        if (mat[vert][i]==1){
        let elem = i; 
        if (!visited[elem]) 
            DFSRecur(elem, visited); 
        } 
    } 
}