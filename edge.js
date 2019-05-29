drawUnDirEdge = (node1, node2) => {
    let can = document.getElementById("can");
    let bodyRect = document.body.getBoundingClientRect(), canRect = can.getBoundingClientRect()
    let yOffset = canRect.top-bodyRect.top
    let xOffset = canRect.left-bodyRect.left
    console.log(xOffset)
    console.log(yOffset)
    document.body.style.padding = "0"
    document.body.style.margin = "0"
    let Node1 = document.getElementById(`${node1}`)
    let Node2 = document.getElementById(`${node2}`)
    let circle1Left = Node1.getBoundingClientRect().left
    let circle1Top = Node1.getBoundingClientRect().top
    let circle2Left = Node2.getBoundingClientRect().left
    let circle2Top = Node2.getBoundingClientRect().top
    let radius = (Node1.getBoundingClientRect().right - Node1.getBoundingClientRect().left) / 2
    radius = parseFloat(radius)
    console.log(radius)
    let ctx = can.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(circle1Left-xOffset+radius, circle1Top-yOffset+radius);
    ctx.lineTo(circle2Left-xOffset+radius, circle2Top-yOffset+radius);
    ctx.lineWidth = 1.5
    ctx.stroke()
}
makeCanvas = () => {
    document.body.innerHTML += `<canvas width="${screen.width}" height="${screen.height}" id="can"></canvas>`
    can.style.position = "absolute"
    can.style.top = "45%"
    can.style.left = "10%"
    document.body.innerHTML += `<form name="edgeMaker" onsubmit="drawUnDirEdge(edgeMaker.node1.value, edgeMaker.node2.value);return false">Enter First Node:<br>
    <input type="text" name="node1"><br>
    Enter Second Node:<br>
    <input type="text" name="node2">
    <input type="submit">
    </form>`
}
