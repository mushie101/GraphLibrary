drawGraphNodes = () => {
    let container = document.createElement('div')
    container.id = 'container';
    let gridNumber = 1
    let widthOfParent = container.clientWidth
    let heightOfParent = container.clientHeight
    let xDirection = widthOfParent / 20
    let yDirection = heightOfParent / 20
    for (let indexY = 0; indexY < yDirection; indexY++) {
        for (let indexX = 0; indexX < xDirection; indexX++) {
            let div = document.createElement('div');
            container.appendChild(div);
            div.style.width = `20px`
            div.id = `${gridNumber++}`
            div.style.display = "inline-block"
        }
    } 
}
