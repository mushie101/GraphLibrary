let counter = 0
/* Takes as input the array size and max value of the elements (100 by default)
Randomly generates a array of given size and max values.
Returns array*/

randomHeapGenerator = (num, maxVal=100) => {
    let heap = new Array()
    for (let i = 0; i < num;){
        heap[i] = Math.floor((Math.random() * maxVal));
        let chk=0 
        for (let j = 0; j < i; j++){
            if (heap[i]!=heap[j]){
                chk++
                }
            }
        if (chk==i){
            i++
            }
        }
    for (let i = ((num/2)-1); i >= 0; i--){ 
        heapify(heap, num, i)
        }
    drawFromArray(heap)
    /* Heapifies passed array recursively */
}
    heapify = (array, num, max) => {
        var largest = max;
        var l = 2*max + 1; 
        var r = 2*max + 2; 
        if (l < num && array[l] > array[largest]) 
            largest = l; 
          
        if (r < num && array[r] > array[largest]) 
            largest = r; 
        
        if (largest != max) 
        { 
            let temp = array[max]
            array[max]=array[largest]
            array[largest]=temp 
            heapify(array, num, largest); 
        } 
    } 
    
drawFromArray = (array) => {
    counter = 0
    for(let index = 0; index < array.length; index++){
        drawTreeNodes()
        makeCanvasTree()
    }
}
makeTree = () => {
    console.log(counter)
    let tree = document.getElementById(`${counter}`)
    tree.setAttribute("visibility", "visible")
}
forms = () => {
    let input = document.createElement("form")
    input.setAttribute("name","graphForm")
    console.log(counter+1000)
    input.setAttribute("onsubmit",`makeTree(${counter});drawEdgeTree();return false`)
    let formText = document.createTextNode("Enter Node:")
    input.appendChild(formText)
    let userInput = document.createElement("input")
    userInput.setAttribute("type","text")
    userInput.setAttribute("name","input")
    input.appendChild(userInput)
    let submitButton = document.createElement("input")
    submitButton.setAttribute("type","submit")
    input.appendChild(submitButton)
    document.body.append(input)
}
drawTreeNodes = () => {
    let widthOfParent = screen.width  * 0.5
    let heightOfParent = screen.height * 0.5
    console.log(heightOfParent)
    heightOfLayer = heightOfParent / 5
    let container = document.createElement("div")
    container.setAttribute("id","container")
    container.style.width = `${widthOfParent}px`
    container.style.height = `${heightOfParent}px`
    let arrayIndex = 0
    document.body.appendChild(container)
    for(let layerNumber = 0;layerNumber < 4;layerNumber++) {
        for(let horizontal = 0; horizontal< Math.pow(2,layerNumber);horizontal++) {
            let childDiv = document.createElement("div")
            childDiv.style.height = `${heightOfLayer}px`
            childDiv.setAttribute("id", `div${arrayIndex}`)
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
            node.setAttribute("visibility", "hidden")
            node.setAttribute("fill", "#aaffaa")
            node.setAttribute("id",`${arrayIndex++}`)
            node.setAttribute("r","22.5%")
            node.setAttribute("stroke","#000000")
            node.setAttribute("strokeWidth","3%")
            svgBlock.appendChild(node)
        }
    }
    forms()
}
drawEdgeTree = () => {
    let can = document.getElementById("canvas")
    let ctx = can.getContext('2d')
    let bodyRect = document.body.getBoundingClientRect(), canRect = can.getBoundingClientRect()
    let yOffset = canRect.top-bodyRect.top
    let xOffset = canRect.left-bodyRect.left
    document.body.style.padding = "0"
    document.body.style.margin = "0"
    console.log(counter.value)
    if (counter > 0) {
        let Node2 = document.getElementById(`${counter}`)
        let Node1 = document.getElementById(`${Math.floor((counter - 1) / 2)}`)
        let circle1Left = Node1.getBoundingClientRect().left
        let circle1Top = Node1.getBoundingClientRect().top
        let circle2Left = Node2.getBoundingClientRect().left
        let circle2Top = Node2.getBoundingClientRect().top
        let radius = (Node1.getBoundingClientRect().right - Node1.getBoundingClientRect().left) / 2
        ctx.beginPath();
        ctx.moveTo(circle1Left-xOffset+radius, circle1Top-yOffset+radius);
        ctx.lineTo(circle2Left-xOffset+radius, circle2Top-yOffset+radius);
        ctx.strokeStyle = "black"
        ctx.lineWidth = 1.5
        ctx.stroke()
    }
    counter ++
}
makeCanvasTree = () => {
    let container = document.getElementById("container")
    let width = container.offsetWidth
    let height = container.offsetHeight
    let canvas = document.createElement("CANVAS")
    container.appendChild(canvas)
    canvas.setAttribute("height",`${height}`)
    canvas.setAttribute("width", `${width}`)
    canvas.setAttribute("id","canvas")
}