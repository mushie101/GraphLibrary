# Library for Graph Visualisation
## Requirements: 
- D3(?)
- JQuery(?)

## Functionalities
- Graph Drawing: -> Start here
    - Should be able to draw graph acc to user specifications
        - Come up with what all specifications, implement a basic adjacecny matrix based inplementation : Shubhangi
    - Should be able to draw undirected and directed graphs
        - User specifications, come up with a way to draw arrows and shiz: Mustafa
    - Should have straight edges in the graphs
    - Should have circular nodes
    - Should follow VLEAD's colour standards

- Graph Modification
    - Should be able to add and delete nodes, along with linked edges (preferably in a single line)
        - Delete node + use function below to delete edges: Shubhangi
    - Should be able to add and delete edges between existing nodes (preferably in a single line)
        - This + update matrix: Mustafa

- Graph Traversal
    - Should be able to traverse connected nodes (with animation showing the traversal)
        - Do later
    - Should be able to tell/return 'current node'
        - Do later

- Graph Deletion
    - Should be able to remove all nodes at once.
        - Check how fast node-by-node deletion acc to above deletion code can be. If not good enough, write seperate function for delete all: Shubhangi

- Graph Generation
    - Should be able to generate a random graph of a given type (Tree, DAG, No restrictions)
    - Should allow user to specify number of nodes
