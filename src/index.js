
import * as d3 from "d3";

let linear = d3.scaleLinear();
linear.domain([0, 100]);
linear.range([0, 200]);

let axis = d3.axisBottom(linear);
axis.ticks(5);
// axis.tickValues([0, 1, 10, 100]);
axis.tickSizeInner(2);
axis.tickSizeOuter(20);
axis.tickFormat(d3.format("0.1f"));


let svg = d3.select("svg");
let gAxis = svg.append("g");
gAxis.attr("transform", "translate(80, 80)"); 

axis(gAxis);
