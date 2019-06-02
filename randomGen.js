/* Takes as input number of vertices and gridSize.
Intialises empty adjacency matrix of correct size (using adjMat function), and randomises coordinates of vertices.
Also ensures no 3 vertices are on the same line (by checking slope) against every pair).*/
randomGeneratorNode = (num, gridSizeX, gridSizeY) => {
let coordX = new Array(num).fill(-1)
let coordY = new Array(num).fill(-1)
let mat = adjMat(num)

for (var i = 0 ; i < num ; ){
    coordX[i] = Math.floor((Math.random() * gridSizeX) + 1); 
    coordY[i] = Math.floor((Math.random() * gridSizeY) + 1); 
    let chk=0
    for (var j = 0; j < i; j++){
        if (coordX[i]!=coordX[j] && coordY[i]!=coordY[j]){
            let chk2 = 0 
            for (let k = 0; k < j; k++  ){
            if (((coordX[i]-coordX[j])/(coordY[i]-coordY[j]))!=((coordX[i]-coordX[k])/(coordY[i]-coordY[k]))){    
            chk2++;
            }
            }
            if (chk2==j){
            chk++
            }
        }
    }
    if (chk==i){
        i++
        //drawNode(coordX[i], coordY[i])
        }
    }
    return mat
}


/* Takes as input number of vertices, existing matrix, and boolean for directed/undirected graph.
Randomises number of edges, source vertex and target vertex, and adds edges (using addEdgeMat function). */
randomGeneratorEdge = (num, mat, isDirected) => {
if (isDirected==1){
    numEdges = Math.floor((Math.random() * (num*(num-1))) + 1);
    }
else {
    numEdges = Math.floor((Math.random() * (num*(num-1)/2)) + 1);
    }
for (let i = 0; i <= numEdges; ){
    let source = Math.floor((Math.random() * num ) + 1)
    let target = Math.floor((Math.random() * num ) + 1)
    if (source != target && mat[source][target] == 0){
        addEdgeMat(source, target, isDirected, mat)
        i++;
        }
    }
}
