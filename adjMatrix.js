adjMat = (num) => {
let mat = new Array(num)
let edgelist = new Array(num).fill(0)
for (var i = 0; i < mat.length; i++) {
        mat[i] = edgelist
    }
return mat
}

addEdgeMat = (source, target, isDir, mat) => {
mat[source][target]=1
if (isDir==0){
    mat[target][source]=1
    }

}

delEdgeMat = (source, target, isDir, mat) => {
mat[source][target]=0
if (isDir==0){
    mat[target][source]=0
    }
}

