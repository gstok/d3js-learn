
import * as d3 from "d3";

let pow = d3.scalePow();
pow.exponent(3);

pow.domain([0, 5]);
pow.range([0, 1000]);

console.log(pow(1.5));