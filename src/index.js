
import * as d3 from "d3";


let linear = d3.scaleLinear();
linear.domain([0, 100]);
linear.range([10, 50]);


let quantize = d3.scaleQuantize();
quantize.domain([0, 100]);
quantize.range(["#333", "#555", "#777", "#999", "#bbb", "#ddd"].reverse());

let dataSet = [5, 10, 30, 40, 50, 60, 70, 80];

let mySvg = d3.select("svg");

let update = mySvg.selectAll("circle").data(dataSet);

let enter = update.enter();

enter.append("circle")
    .attr("cx", (d, i) => i * 70 + 50)
    .attr("cy", 300)
    .attr("r", d => linear(d))
    .attr("fill", d => quantize(d));

