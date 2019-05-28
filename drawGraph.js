drawGraphNodes = () => {
    let container = document.createElement('div')
    container.id = 'container';
    let gridNumber = 1
    let widthOfParent = document.container.clientWidth
    let heightOfParent = document.container.clientHeight
    let xDirection = widthOfParent / 20
    let yDirection = heightOfParent / 20
    for (let indexY = 0; indexY < 100; indexY++) {
        for (let indexX = 0; indexX < 100; indexX++) {
            let div = document.createElement('div');
            container.appendChild(div);
            div.style.width = `20px`
            div.id = `${gridNumber++}`
            div.style.position= "absolute"
            div.style.top = `${indexY*20}`
            div.style.left = `${indexX*20}`
        }
    } 
}
