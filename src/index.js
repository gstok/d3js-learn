
import * as d3 from "d3";

// let linear = d3.scaleLinear();
// linear.domain([0, 100, 200]);
// linear.range([0, 1000, 1010]);

// console.log(linear(101));


// let quantile1 = d3.scaleQuantile();
// quantile1.domain([0, 10]);
// quantile1.range(["一", "二", "三", "四", "五"]);
// console.log(quantile1(11));
// console.log(quantile1.quantiles());


let quantize = d3.scaleQuantize();
quantize.domain([0, 2, 4, 10]);
quantize.range([1, 100]);
for (let i = 0; i < 11; ++i) {
    console.log(i, quantize(i));
}



let quantile3 = d3.scaleQuantile();
quantile3.domain([0, 2, 4, 10]);
quantile3.range([1, 100]);
console.log(quantile3.quantiles());
for (let i = 0; i < 11; ++i) {
    console.log(i, quantile3(i));
}