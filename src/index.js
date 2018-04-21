
import * as d3 from "d3";

let linear = d3.scaleLinear();
linear.domain([-1000, 1000]);
linear.range([0, 100]);

let ticks = linear.ticks(5);
let tickFormart = linear.tickFormat(5, "+d");

console.log(ticks);

console.log(ticks.map(tickFormart));