/* Takes as input the number of vertices.
Initialises and returns an empty adjacency matrix */
adjMat = (num) => {                     
let mat = new Array(num)
for (var i = 0; i < mat.length; i++) {
        mat[i] = new Array(num).fill(0)
    }
return mat
}

/* Takes as input source vertex, target vertex, 
boolean value of directed/undirected graph, and existing adjacency matrix.
Modifies adjancency matrix by adding edge. */
addEdgeMat = (source, target, isDirected, mat) => {
mat[source][target]=1
if (isDirected==0){
    mat[target][source]=1
    }
}

/* Takes as input source vertex, target vertex, 
boolean value of directed/undirected graph, and existing adjacency matrix.
Modifies adjancency matrix by deleting edge. */
delEdgeMat = (source, target, isDirected, mat) => {
mat[source][target]=0
if (isDirected==0){
    mat[target][source]=0
    }
}

/* Takes as input existing matrix and number of vertices.
Adds empty row and column to matrix and returns new number of vertices. */
addNodeMat = (mat, num) => {
let edgelist = new Array(num).fill(0)
mat.push(edgelist)
for (var i = 0; i < num+1; i++ ){
    mat[i].push(0)
    }
num++
return num
}

/* Takes as input existing matrix and number of vertices.
Implements lazy deletion (to maintain id number of nodes) matrix and returns new number of vertices. */
delNodeMat = (mat, num, node) => {
let edgeList = new Array(num).fill(-1)
mat[node]=edgeList
for (var i = 0; i < num; i++){
    mat[i][node]=-1
    }
}
