// This is a graph class
// It creates an object of type Graph
class Graph{
    constructor()
    {
        this.num = 0; // Stores the number of vertices
        this.AdjList = new Map();
    }
    addVertex(v) 
    { 
        this.AdjList.set(v, []);
        this.num = this.num + 1; 
    } 
    addEdge(source, destination)
    {
        this.AdjList.get(source).push(destination)  ; 
    }
}