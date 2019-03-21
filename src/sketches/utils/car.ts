export default class Car {
    xPos: number
    yPos: number
    width: number
    height: number
    velocityX: number

    rect: d3.Selection<d3.BaseType, {}, HTMLElement, any>

    constructor(svg:d3.Selection<d3.BaseType, {}, HTMLElement, any>, yPos = 200) {
        this.xPos = 0
        this.width = 50
        this.height = 25
        this.velocityX = 1
        this.yPos = yPos
        this.rect = svg.append("rect")
            .attr("y", this.yPos)
            .attr("x", this.xPos)   
            .attr("width",  this.width)
            .attr("height",  this.height)
            .style("fill", 0) 
    }

    disegna() {
        return this.rect.attr("y", this.yPos)
            .attr("x", this.xPos)   
    }

    muovi() {
        this.xPos += this.velocityX
    }
}
