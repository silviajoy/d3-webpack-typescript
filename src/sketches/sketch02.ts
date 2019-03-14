const dance = (svg:d3.Selection<d3.BaseType, {}, HTMLElement, any>) => {
    setInterval(() => {
        
        const r = Math.floor(Math.random()*255)
        const g = Math.floor(Math.random()*255)
        const b = Math.floor(Math.random()*255)

        const color = `rgb(${r}, ${g}, ${b})`

        console.log(color)
        
        svg.append("circle")
            .attr("cy", Math.random() * window.innerHeight)
            .attr("cx", Math.random() * window.innerWidth)
            .attr("r",  Math.random()*100)
            .style("fill", color);
    }, 10000)
}

export default dance