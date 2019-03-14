const dance = (svg:d3.Selection<d3.BaseType, {}, HTMLElement, any>) => {
    setInterval(() => {
        let circle = svg.selectAll("circle")
        
        svg.append("circle")
            .attr("cy", 60)
            .attr("cx", 30)
            .attr("r",  Math.random()*10)
            .style("fill", "steelblue");

        circle.attr("cx", function() { return Math.random() * window.innerWidth })
        circle.attr("cy", function() { return Math.random() * window.innerHeight })

    }, 1000)
}

export default dance