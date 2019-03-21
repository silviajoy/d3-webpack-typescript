export default class Ball {
    circle: d3.Selection<d3.BaseType, {}, HTMLElement, any>
    xPos: number
    yPos: number
    dc: number
    velocityX: number
    velocityY: number

    constructor(svg:d3.Selection<d3.BaseType, {}, HTMLElement, any>, xPos = 25, yPos = window.innerHeight/2) {
        this.xPos = xPos
        this.dc = 50
        this.velocityX = 4
        this.velocityY = 3
        this.yPos = yPos
        this.circle = svg.append("circle")
            .attr("cy", this.yPos)
            .attr("cx", this.xPos)   
            .attr("r",  this.dc/2)
            .style("fill", 0) 
    }

    disegna() {
        return this.circle.attr("cy", this.yPos)
            .attr("cx", this.xPos)   
    }

    muovi() {
        this.xPos += this.velocityX
        this.yPos += this.velocityY
    }

    bordi() {
        if(this.xPos > window.innerWidth-this.dc/2 || this.xPos < this.dc/2) {
            this.velocityX *= -1
        }
        if(this.yPos > window.innerHeight-this.dc/2 || this.yPos < this.dc/2) {
            this.velocityY *= -1
        }
    }
}
