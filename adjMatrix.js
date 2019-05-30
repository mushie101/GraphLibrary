/* Takes as input the number of vertices.
Initialises and returns an empty adjacency matrix */
adjMat = (num) => {                     
let mat = new Array(num)
for (var i = 0; i < mat.length; i++) {
        mat[i] = new Array(num).fill(0)
    }
return mat
}

/* Takes as input source vertex, target vertex, coordinate arrays,
boolean value of directed/undirected graph, and existing adjacency matrix.
Modifies adjancency matrix by adding edge. */
addEdgeMat = (source, target, coordX, coordY, isDirected, mat, num) => {
let sourceID = -1
let targetID = -1
for (let i = 0; i < num; i++)
{
if (coordX[i]==source[0] && coordY[i]==source[1])
    sourceID = i
else if (coordX[i]==target[0] && coordY[i]==target[1])
    targetID = i
}

mat[sourceID][targetID]=1
if (isDirected==0){
    mat[targetID][sourceID]=1
    }
}

/* Takes as input source vertex, target vertex, coordinate arrays,
boolean value of directed/undirected graph, and existing adjacency matrix.
Modifies adjancency matrix by deleting edge. */
delEdgeMat = (source, target, coordX, coordY, isDirected, mat) => {
let sourceID = -1
let targetID = -1
for (let i = 0; i < num; i++)
{
if (coordX[i]==source[0] && coordY[i]==source[1])
    sourceID = i
else if (coordX[i]==target[0] && coordY[i]==target[1])
    targetID = i
}

mat[sourceID][targetID]=0
if (isDirected==0){
    mat[targetID][sourceID]=0
    }
}

/* Takes as input existing matrix, coordinates of new node, coordinate arrays, and number of vertices.
Adds empty row and column to matrix and returns new number of vertices. */
addNodeMat = (mat, newNode, coordX, coordY, num) => {
let edgelist = new Array(num).fill(0)
mat.push(edgelist)
for (var i = 0; i < num+1; i++ ){
    mat[i].push(0)
    }
coordX.push(newNode[0])
coordY.push(newNode[1])
num++
return num
}

/* Takes as input existing matrix and number of vertices.
Implements lazy deletion (to maintain id number of nodes) matrix and returns new number of vertices. */
delNodeMat = (mat, num, node) => {
let nodeID = -1
for (let i = 0; i < num; i++)
{
if (coordX[i]==node[0] && coordY[i]==node[1])
    nodeID = i
}
let edgeList = new Array(num).fill(-1)
mat[nodeID]=edgeList
for (var i = 0; i < num; i++){
    mat[i][nodeID]=-1
    }
}
