drawUnDirEdge = (rc, bc) => {
    let x=1;
    function createEdge(rc,bc){
    document.getElementById("edge").innerHTML +='<line id="line'+x+'" style="position:absolute ; stroke-width:1.5;stroke:black; position:fixed ;z-index:-1;"/>';
    
    line1 = $("#line"+x.toString());   
    x++;
    div1 = $(rc);   
    div2 = $(bc);
    r = document.getElementById("rc").getAttribute("r");
    r=r/10;
    r = r-1;
    var pos1 = div1.position();
    var pos2 = div2.position();
    line1
        .attr('x1', pos1.left+10*r+2)
        .attr('y1', pos1.top-32+10*r)
        .attr('x2', pos2.left+10*r+2)
        .attr('y2', pos2.top-32+10*r);
    console.log(pos1.left,pos1.top,pos2.left,pos2.top);
    return line1
    }
}