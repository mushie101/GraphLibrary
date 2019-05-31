// Takes as input an object of type Graph

isDAG = (graphObject) => {
    let visited = [];
    let rec_Stack = [];
    let num = graphObject.num;
    for (let i = 0; i < num; i++) 
    {
        visited[i] = false; 
        rec_Stack[i] = false;
    }
    for (let i = 0; i < num; i++){
        if(detectCycle(i, graphObject, visited, rec_Stack))
        {
            console.log(i);
            return false;
        }
    return true;
    }
}

// Detects cycle starting from a given node
// Takes as input, the vertex, object of type Graph, visted and rec_Stack

detectCycle = (vert, graphObject, visited, rec_Stack) => { 
    if(visited[vert] == false)
    {
        visited[vert] = true;
        rec_Stack[vert] = true;

        let neighbours = graphObject.AdjList.get(vert);

        for(var i in neighbours){
            let element = neighbours[i];

            if(visited[element] == false && detectCycle(element, graphObject, visited, rec_Stack))
                return true;
            else if(rec_Stack[element] == true)
                return true;
        }
    }
    rec_Stack[vert] = false;
    return false; 
}