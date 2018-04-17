

import * as d3 from 'd3';

let li = d3.select("ul").selectAll("li").text("你好，世界");
li.style("color", "red");
li.style("font-size", "12px");

console.log(li.empty());
console.log(li.node());
console.log(li.size());

let mySvg = d3.select("body").append("svg")
    .attr("width", 640)
    .attr("height", 480);
mySvg.classed("mysvg", true);

console.log(mySvg.classed("mysvg"));

mySvg.append("circle")
    .attr("cx", 30)
    .attr("cy", 30)
    .attr("r", 20)
    .attr("fill", "#93e255");

let body = d3.select("body");
let input = body.append("input");
input.attr("type", "text");
input.attr("value", "你好，世界");
input.property("value", "你不好，世界");

let span = body.insert("span", "input").text("这里是span");
body.insert("textarea", "span").text("这里是textarea");
span.remove();