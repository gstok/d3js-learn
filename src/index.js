
import * as d3 from "d3";

let ordinal = d3.scaleOrdinal(d3.schemeCategory10);
for (let i = 0; i < 20; ++i) {
    console.log(ordinal(Math.random()));
}


let svg = d3.select("svg");
let dataSet = Array(1000).fill(0).map((item, index) => index + 1);

svg.selectAll("circle")
    .data(dataSet)
    .enter()
    .append("circle")
    .attr("cx", () => Math.random() * 640)
    .attr("cy", () => Math.random() * 480)
    .attr("fill", d => ordinal(d))
    .attr("r", () => Math.random() * 20 + 5);


