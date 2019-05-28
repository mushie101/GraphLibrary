adjMat = (num) => {
let mat = new Array(num)
let edgelist = new Array(num).fill(0)
for (var i = 0; i < mat.length; i++) {
        mat[i] = edgelist
    }
return mat
}

addEdgeMat = (source, target, isDirected, mat) => {
mat[source][target]=1
if (isDirected==0){
    mat[target][source]=1
    }

}

delEdgeMat = (source, target, isDirected, mat) => {
mat[source][target]=0
if (isDirected==0){
    mat[target][source]=0
    }
}

//addNodeMat = (mat, num) => {


//}

//Lazy deletion
delNodeMat = (mat, num, node) => {
let edgeList = new Array(num).fill(-1)
mat[node]=edgeList
for (var i = 0; i < num; i++){
    mat[i][node]=-1
    }
}

delAllNodesMat = (mat, num) => {
mat=adjMat(num)
}
