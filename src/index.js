
import * as d3 from "d3";

let d3Area = d3.select("#d3-area");

let width = 640;
let height = 480;
let rectStep = 40;
let rectWidth = 30;
let pading = { top: 20, bottom: 20, left: 20, right: 20 };
let dataSet = [70, 45, 33, 180, 26, 76, 100, 20, 66];

let mySvg = d3Area.append("svg");
mySvg.attr("width", width);
mySvg.attr("height", height);

mySvg.append("rect");
mySvg.append("text");

function reDraw (dataSet) {
    let rectUpdate = mySvg.selectAll("rect").data(dataSet);
    let rectEnter = rectUpdate.enter();
    let rectExit = rectUpdate.exit();
    function rectSetAttrs (rects) {
        rects
            .attr("x", (d, i) => i * rectStep + pading.left)
            .attr("y", d => height - d - pading.bottom)
            .attr("width", rectWidth)
            .attr("height", d => d)
            .attr("fill", "steelblue");
    }
    rectSetAttrs(rectUpdate);
    let rects = rectEnter.append("rect");
    rectSetAttrs(rects);
    rectExit.remove();
    
    let textUpdate = mySvg.selectAll("text").data(dataSet);
    let textEnter = textUpdate.enter();
    let textExit = textUpdate.exit();
    function textSetAttrs (texts) {
        texts
            .text(d => d)
            .attr("fill", "white")
            .attr("x", (d, i) => i * rectStep + pading.left)
            .attr("y", d => height - d - pading.bottom)
            .attr("dx", rectWidth / 2)
            .attr("dy", "1em")
            .attr("text-anchor", "middle")
            .attr("font-size", "12px");
    }
    textSetAttrs(textUpdate);
    let texts = textEnter.append("text");
    textSetAttrs(texts);
    textExit.remove();
}

reDraw(dataSet);


d3Area.append("button")


document.getElementById("sortBtn").addEventListener("click", () => {
    dataSet.sort((a, b) => b - a);
    reDraw(dataSet);
});

document.getElementById("randBtn").addEventListener("click", () => {
    dataSet.push(Math.floor(Math.random() * 200));
    reDraw(dataSet);
});