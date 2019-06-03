function generateDAG(){
    var g = new Graph();
    
    let nodes_min = 1;
    let nodes_max = 5;
    let height_min = 3; 
    let height_max = 5;
    let percent = 30;

    var nodes = 0;
    var ranks = height_min
                + (Math.random () * (height_max - height_min + 1));
  
    for(var i = 0; i<ranks*5; i++)
        g.addVertex(i);
    for (var i = 0; i < ranks; i++)
      {
        var new_nodes = nodes_min
                        + (Math.random () * (nodes_max - nodes_min + 1));
  
        for (var j = 0; j < nodes; j++)
          for (var k = 0; k < new_nodes; k++)
            if ( (Math.random () * 100) < percent)
                g.addEdge(j, k+nodes);
        
        nodes += new_nodes; 
    }
    return g;
}