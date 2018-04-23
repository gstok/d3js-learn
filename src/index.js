
import * as d3 from "d3";

let svg = d3.select("svg");

let dataSet = Array(10).fill(0).map(() => Math.random() * 1000);

let yScale = d3.scaleLinear();
yScale.domain([d3.max(dataSet), 0]);
yScale.range([30, 400]);

let rectScale = d3.scaleLinear();
rectScale.domain([0, d3.max(dataSet)]);
rectScale.range([0, 400]);

let yAxis = d3.axisLeft(yScale);
let g = svg.append("g");
// g.attr("transform", "translate(50, 80)");
yAxis(g);

let colorOrdinal = d3.scaleOrdinal(d3.schemeCategory10);




let rectUpdate = svg.selectAll("rect").data(dataSet);
let rectEnter = rectUpdate.enter();
let rectExit = rectUpdate.exit();
rectEnter
    .append("rect")
    .attr("x", (d, i) => i * 40 + 60)
    .attr("y", d => 600 - rectScale(d) - 60)
    .attr("width", 30)
    .attr("height", d => rectScale(d))
    .attr("fill", d => colorOrdinal(d))

let textUpdate = svg.selectAll("text").data(dataSet);
let textEnter = textUpdate.enter();
let textExit = textUpdate.exit();
textEnter
    .append("text")
    .attr("x", (d, i) => i * 40 + 60)
    .attr("y", d => 600 - rectScale(d) - 60)
    .attr("fill", "white")
    .attr("font-size", "11px")
    .attr("dx", 30 / 2)
    .attr("dy", "1em")
    .attr("text-anchor", "middle")
    .text(d => {
        return d3.format("0.1f")(d);
    });

