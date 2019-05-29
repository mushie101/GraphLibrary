adjMat = (num) => {
let mat = new Array(num)
for (var i = 0; i < mat.length; i++) {
        mat[i] = new Array(num).fill(0)
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

addNodeMat = (mat, num) => {
let edgelist = new Array(num).fill(0)
mat.push(edgelist)
for (var i = 0; i < num+1; i++ ){
    mat[i].push(0)
    }
num++
return num
}

//Lazy deletion
delNodeMat = (mat, num, node) => {
let edgeList = new Array(num).fill(-1)
mat[node]=edgeList
for (var i = 0; i < num; i++){
    mat[i][node]=-1
    }
}
