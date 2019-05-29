randomGeneratorNode = (num, gridSize) => {
let coordX = new Array(num).fill(-1)
let coordY = new Array(num).fill(-1)
adjMat(num)

for (var i = 0 ; i < num ; ){
    coordX[i] = Math.floor((Math.random() * gridSize) + 1); 
    coordY[i] = Math.floor((Math.random() * gridSize) + 1); 

    for (var j = 0; j < i; j++){
        if (coordX[i]!=coordX[j] && coordY[i]!=coordY[j]){
            i++;
            }
        drawNode(i, coordX[i], coordY[i])
              
        }

    }

}


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
    if (source != target && mat[source][target]== 0){
        addEdgeMat(source, target, isDirected, mat)
        i++;
        }
    }

}