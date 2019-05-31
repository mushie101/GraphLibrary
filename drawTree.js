drawTreeNodes = () => {
    let widthOfParent = screen.width 
    let heightOfParent = screen.height * 0.5
    console.log(heightOfParent)
    heightOfLayer = heightOfParent / 5
    let container = document.createElement("div")
    container.style.width = `${widthOfParent}px`
    container.style.height = `${heightOfParent}px`
    let arrayIndex = 0
    document.body.appendChild(container)
    for(let layerNumber = 0;layerNumber < 5;layerNumber++) {
        for(let horizontal = 0; horizontal< Math.pow(2,layerNumber);horizontal++) {
            let childDiv = document.createElement("div")
            childDiv.style.height = `${heightOfLayer}px`
            childDiv.setAttribute("id", `${arrayIndex}`)
            let widthOfLayer = widthOfParent / Math.pow(2, layerNumber)
            childDiv.style.width = `${widthOfLayer}px`
            console.log(widthOfLayer)
            container.appendChild(childDiv)
            childDiv.style.position = "absolute"
            childDiv.style.top = `${layerNumber*heightOfLayer}px`
            childDiv.style.left = `${horizontal*widthOfLayer}px`
            let svgBlock = document.createElementNS("http://www.w3.org/2000/svg", "svg")
            svgBlock.setAttribute("height", heightOfLayer)
            svgBlock.setAttribute("width", heightOfLayer)
            svgBlock.style.position = "relative"
            svgBlock.style.left = "50%"
            svgBlock.style.webkitTransform = "translateX(-50%)"
            svgBlock.style.transform = "translateX(-50%);"
            childDiv.appendChild(svgBlock)
            let node = document.createElementNS("http://www.w3.org/2000/svg", "circle")
            node.setAttribute("cx", "50%")
            node.setAttribute("cy", "50%")
            // node.setAttribute("visibility", "show")
            node.setAttribute("fill", "#aaffaa")
            node.setAttribute("id",`${arrayIndex++}`)
            node.setAttribute("r","22.5%")
            node.setAttribute("stroke","#000000")
            node.setAttribute("strokeWidth","3%")
            svgBlock.appendChild(node)
        }
    }
}