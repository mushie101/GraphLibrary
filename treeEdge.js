drawEdge = (counter) => {
    let canvas = document.getElementById("canvas")
    let ctx = canvas.getContext('2d')
    let bodyRect = document.body.getBoundingClientRect(), canRect = can.getBoundingClientRect()
    let yOffset = canRect.top-bodyRect.top
    let xOffset = canRect.left-bodyRect.left
    document.body.style.padding = "0"
    document.body.style.margin = "0"
    let yOffset = canRect.top-bodyRect.top
    let xOffset = canRect.left-bodyRect.left
    if (counter > 0) {
        let Node2 = document.getElementById(`${counter}`)
        let Node1 = document.getElementById(`${Math.floor(counter / 2)}`)
        let circle1Left = Node1.getBoundingClientRect().left
        let circle1Top = Node1.getBoundingClientRect().top
        let circle2Left = Node2.getBoundingClientRect().left
        let circle2Top = Node2.getBoundingClientRect().top
        let radius = (Node1.getBoundingClientRect().right - Node1.getBoundingClientRect().left) / 2
        
    }
}
makeCanvas = () => {
    let container = document.getElementById("container")
    let width = container.offsetWidth
    let height = container.offsetHeight
    let canvas = document.createElement("CANVAS")
    container.appendChild(canvas)
    canvas.setAttribute("height",`${height}`)
    canvas.setAttribute("width", `${width}`)
    canvas.setAttribute("id","canavs")
    drawEdge()
}