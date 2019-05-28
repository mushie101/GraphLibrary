randomGenerator = (num, gridSize) => {
let coordX = new Array(num).fill(-1)
let coordY = new Array(num).fill(-1)

for (var i = 0 ; i < num ; ){
    coordX[i]= Math.floor((Math.random() * 100) + 1); 
    coordY[i]= Math.floor((Math.random() * 100) + 1); 

    for (var j = 0; j < i; j++){
        if (coordX[i]!=coordX[j] && coordY[i]!=coordY[j]){
            i++;
            drawNode(i, coordX[i], coordY[i])
            }  
        }

    }

}