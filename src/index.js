
import * as d3 from "d3";

let powScale = d3.scalePow();
powScale.exponent(2);
powScale.domain([0, 5]);
powScale.range([0, 400]);


let axis = d3.axisBottom(powScale);

let svg = d3.select("svg");
let gAxis = svg.append("g");
gAxis.attr("transform", "translate(80, 80)"); 

axis(gAxis);
