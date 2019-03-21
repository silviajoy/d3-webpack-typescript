/* Bouncing ball */

const bouncing = (svg:d3.Selection<d3.BaseType, {}, HTMLElement, any>) => {
    let circle: d3.Selection<d3.BaseType, {}, HTMLElement, any>
    let xPos: number
    let yPos: number
    let dc: number
    let velocityX: number
    let velocityY: number

    const setup = () => {
        dc = 50
        xPos = 25
        yPos = window.innerHeight/2
        velocityX = 3
        velocityY = 4
        circle = svg.append("circle")
            .attr("cy", yPos)
            .attr("cx", xPos)   
            .attr("r",  dc/2)
            .style("fill", 0)   
        
        animation()
    }

    const animation = () => {     
        bordi()
        muovi()
        disegna()

        requestAnimationFrame(animation)
    }

    const disegna = () => {
        circle.attr("cy", yPos)
            .attr("cx", xPos)
    }

    const muovi = () => {
        xPos += velocityX
        yPos += velocityY
    }

    const bordi = () => {
        if(xPos > window.innerWidth-dc/2 || xPos < dc/2) {
            velocityX *= -1
        }
        if(yPos > window.innerHeight-dc/2 || yPos < dc/2) {
            velocityY *= -1
        }
    }

    requestAnimationFrame(setup)
}

export default bouncing