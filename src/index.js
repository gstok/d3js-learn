

import * as d3 from 'd3';

let p = d3.select("#d3-area").selectAll("p").text("你好，世界");
p.style("color", "#549233");
p.style("font-size", "16px");

p.datum("无序列表项目");
p.text((d, i) => {
    return (d + "  " + (i + 1)).toString();
});

p.append("span").text((d, i) => {
    return d.toString();
});


// console.log(li.empty());
// console.log(li.node());
// console.log(li.size());

// let mySvg = d3.select("body").append("svg")
//     .attr("width", 640)
//     .attr("height", 480);
// mySvg.classed("mysvg", true);

// console.log(mySvg.classed("mysvg"));

// mySvg.append("circle")
//     .attr("cx", 30)
//     .attr("cy", 30)
//     .attr("r", 20)
//     .attr("fill", "#93e255");

// let body = d3.select("body");
// let input = body.append("input");
// input.attr("type", "text");
// input.attr("value", "你好，世界");
// input.property("value", "你不好，世界");

// let span = body.insert("span", "input").text("这里是span");
// body.insert("textarea", "span").text("这里是textarea");
// span.remove();