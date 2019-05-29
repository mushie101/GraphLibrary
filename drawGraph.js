makeGraph = (id) => {
    console.log(id)
    let graph = document.getElementById(`${id}`)
    graph.setAttribute("visibility", "visible")
    return
}
drawGraphNodes = () => {
    let container = document.createElement('div')
    document.body.appendChild(container)
    container.id = 'container';
    container.style.width = `100px`
    container.style.height = `100px`
    container.style.alignContent='center'
    container.style.position = "absolute"
    container.style.left = "10%"
    container.style.top = "45%"
    let gridNumber = 1
    let widthOfParent = screen.width*0.75;
    let heightOfParent = screen.height*0.5;
    let xDirection = widthOfParent / 75
    let yDirection = heightOfParent / 75
    for (let indexY = 0; indexY < yDirection; indexY++) {
        for (let indexX = 0; indexX < xDirection; indexX++) {
            let div = document.createElement('div');
            container.appendChild(div);
            div.style.width = `75px`
            div.style.height = `75px`
            div.id = `div`;
            div.style.position= "absolute"
            div.style.top = `${indexY*75}px`
            div.style.left = `${indexX*75}px`
            div.style.alignContent = `center`
            div.style.border = "thin dotted rgb(220,220,220)"
            div.innerHTML = `<svg width=75 height=75>
                                <circle cx="50%" cy="50%" visibility="hidden" fill="#aaffaa" id=${gridNumber} r="22.5%" stroke="#000000" stroke-width="3%"/>
                                <text x=75% y=90%>${gridNumber++}</text>
                            </svg>`
            console.log(gridNumber-1)
        }
    }
    document.body.innerHTML += `<form name="form" onsubmit="makeGraph(form.node.value); return false">Select Node:<br>
                                    <input type="text" name="node">
                                    <input type="submit">
                                </form>`
}