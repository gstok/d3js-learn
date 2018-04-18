

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

let update = mySvg.selectAll("rect").data(dataSet);
let enter = update.enter();
let exit = update.exit();

function setAttrs (rects) {
    rects
        .attr("x", (d, i) => i * rectStep + pading.left)
        .attr("y", d => height - d - pading.bottom)
        .attr("width", rectWidth)
        .attr("height", d => d)
        .attr("fill", "steelblue");
}

setAttrs(update);

let rects = enter.append("rect");
setAttrs(rects);

exit.remove();




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


let texts = textEnter.append("text");
textSetAttrs(texts);