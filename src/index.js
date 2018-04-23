
import * as d3 from "d3";

let threshold = d3.scaleThreshold();
threshold.domain([10, 20, 30]);
threshold.range(["一", "二", "三", "四"]);
console.log(threshold(30));