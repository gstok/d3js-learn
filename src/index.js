
import * as d3 from "d3";

let dataSet = Array(10).fill(0).map(() => Math.random() * 1000 + 50);
let width = 1200;
let height = 700;
let padding = {
    x: 100,
    y: 100,
};

let svg = d3.select("svg");
svg.attr("width", width);
svg.attr("height", height);

let colorOrdinal = d3.scaleOrdinal(d3.schemeCategory10);

let xScale = d3.scaleBand();
xScale.domain(d3.range(dataSet.length));
xScale.range([0, width - padding.x * 2]);
xScale.padding(0.2);

let yScale = d3.scaleLinear();
yScale.domain([0, d3.max(dataSet) + 50]);
yScale.range([0, height - padding.y * 2]);

let rectUpdate = svg.selectAll("rect").data(dataSet);
let rectEnter = rectUpdate.enter();
let rectExit = rectUpdate.exit();
rectEnter
    .append("rect")
    .attr("x", (d, i) => xScale(i) + padding.x)
    .attr("y", d => height - yScale(d) - padding.y)
    .attr("width", xScale.bandwidth())
    .attr("height", d => yScale(d))
    .attr("fill", d => colorOrdinal(d));
let textUpdate = svg.selectAll("text").data(dataSet);
let textEnter = textUpdate.enter();
let textExit = textUpdate.exit();
textEnter
    .append("text")
    .attr("x", (d, i) => xScale(i) + padding.x)
    .attr("y", d => height - yScale(d) - padding.y)
    .attr("fill", "white")
    .attr("font-size", "14px")
    .attr("dx", xScale.bandwidth() / 2)
    .attr("dy", "1em")
    .attr("text-anchor", "middle")
    .text(d => d3.format("0.1f")(d));





yScale.domain([d3.max(dataSet) + 50, 0]);
let yAxis = d3.axisLeft(yScale);
let gy = svg.append("g");
gy.attr("transform", "translate(100, 100)");
yAxis(gy);

let xAxis = d3.axisBottom(xScale);
let gx = svg.append("g");
gx.attr("transform", "translate(100, 600)");
xAxis(gx);


