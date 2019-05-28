drawGraphNodes = (nodes) => {
    let split = (100 / nodes)
    for (let index = 0; index < nodes; index++) {
        var div = document.createElement('div');
        document.body.appendChild(div);
        div.style.width = `${split}%`
        div.id = `${index+1}`
        div.innerHTML += '<svg style="display: block; margin: auto;" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><circle cx="153.5" cy="122.5" fill="#aaffaa" id="svg_1" r="19.31321" stroke="#666666" stroke-width="5"/></svg>'
        div.style.display = "inline-block"
    } 
}

drawUndirectedEdges = (source, dest) => {
}