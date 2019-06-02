makeCanvas = () => {
    let container = document.getElementById("container")
    let width = container.offsetWidth
    let height = container.offsetHeight
    let canvas = document.createElement("CANVAS")
    container.appendChild(canvas)
    canvas.setAttribute("height",`${height}`)
    canvas.setAttribute("width", `${width}`)
}