
import * as d3 from "d3";

let dataSet = Array(10).fill(0).map(() => {
    return {
        x: Math.random() * 1000,
        y: Math.random() * 640,
        size: Math.random() * 100 + 10
    }
});
let width = 1200;
let height = 700;
let padding = {
    x: 100,
    y: 100,
};

console.log(dataSet);

//位置定位
function translate (x, y) {
    return `translate(${ x.toString() }, ${ y.toString() })`;
}
//创建SVG作图区域
function addSvg () {
    let d3Area = d3.select("#d3-area");
    let svg = d3Area.append("svg");
    svg.attr("width", width);
    svg.attr("height", height);
    svg.style("border", "solid 1px black");
    return svg;
}


//创建X轴比例尺
function createXScale () {
    let xScale = d3.scaleLinear();
    xScale.domain([0, d3.max(dataSet, d => d.x)]);
    xScale.nice();
    xScale.range([0, width - padding.x * 2]);
    return xScale;
}
//创建Y轴比例尺
function createYScale () {
    let yScale = d3.scaleLinear();
    yScale.domain([0, d3.max(dataSet, d => d.y)]);
    yScale.nice();
    yScale.range([0, height - padding.y * 2]);
    return yScale;
}

//创建尺寸比例尺
function createSizeScale () {
    let scale = d3.scaleLinear();
    scale.domain([0, d3.max(dataSet, d => d.y)]);
    scale.nice();
    scale.range([10, 100]);
    return scale;
}


//更新图
function updateScatter (g, xScale, yScale, sizeScale) {
    let colorOrdinal = d3.scaleOrdinal(d3.schemeCategory10);
    let circleUpdate = g.selectAll("circle").data(dataSet);
    let circleEnter = circleUpdate.enter();
    let circleExit = circleUpdate.exit();
    function setCircleAttrs (circles) {
        circles
            .attr("cx", d => xScale(d.x) + padding.x)
            .attr("cy", d => height - yScale(d.y) - padding.y)
            .attr("r", d => sizeScale(d.size))
            .attr("fill", (d, i) => colorOrdinal(i));
    }
    setCircleAttrs(circleUpdate);
    let circles = circleEnter.append("circle");
    setCircleAttrs(circles);
    circleExit.remove();

    let textUpdate = g.selectAll("text").data(dataSet);
    let textEnter = textUpdate.enter();
    let textExit = textUpdate.exit();
    function setTextAttrs (texts) {
        texts
            .attr("x", d => xScale(d.x) + padding.x)
            .attr("y", d => height - yScale(d.y) - padding.y)
            .attr("dx", -5)
            .attr("dy", "0.4em")
            .text((d, i) => i.toString());
    }
    setTextAttrs(textUpdate);
    let texts = textEnter.append("text");
    setTextAttrs(texts);
    textExit.remove();
}

//更新X坐标轴
function updateXAxis (g, scale) {
    let xAxis = d3.axisBottom(scale);
    g.attr("transform", translate(padding.x, height - padding.y));
    xAxis(g);
}
//更新Y坐标轴
function updateYAxis (g, scale) {
    scale.domain([d3.max(dataSet, d => d.y), 0]);
    scale.nice();
    let yAxis = d3.axisLeft(scale);
    g.attr("transform", translate(padding.x, padding.y));
    yAxis(g);
}


let svg = addSvg();
let gBar = svg.append("g");
let gXAxis = svg.append("g");
let gYAxis = svg.append("g");



//更新图表
function update () {
    let xScale = createXScale();
    let yScale = createYScale();
    let sizeScale = createSizeScale();
    updateScatter(gBar, xScale, yScale, sizeScale);
    updateXAxis(gXAxis, xScale);
    updateYAxis(gYAxis, yScale);
}

update();

document.getElementById("randAddBtn").addEventListener("click", () => {
    let newItem = {
        x: Math.random() * 1000,
        y: Math.random() * 640,
        size: Math.random() * 100 + 10
    };
    dataSet.push(newItem);
    update();
});










