import * as d3 from "d3";
import * as sketch from "./sketches/sketches"


let svg = d3.select("svg")

const dance = () => {
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

sketch.s02(svg)






