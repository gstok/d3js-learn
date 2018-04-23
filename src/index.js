
import * as d3 from "d3";

let scaleBand = d3.scaleBand();
scaleBand.domain([1, 2, 3, 4, 5]);
scaleBand.range([0, 100]);
scaleBand.padding(0.5);
scaleBand.paddingOuter(1);

let numList = Array(5).fill(0).map((item, index) => index + 1);

numList.forEach(num => {
    console.log(scaleBand(num));
});

console.log("————");
console.log(scaleBand.step());
console.log(scaleBand.bandwidth());
console.log(scaleBand.padding());
