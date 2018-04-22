
import * as d3 from "d3";

//普通的序数比例尺
let ordinal1 = d3.scaleOrdinal();
ordinal1.domain([1, 2, 3, 4, 5]);
ordinal1.range(["一", "二", "三", "四", "五"]);
console.log(ordinal1(3));


//貌似d3 v4的pading规则变了
let ordinal2 = d3.scalePoint();
ordinal2.domain([1, 2, 3, 4, 5]);
ordinal2.range([0, 100]);
console.log(ordinal2(2));
ordinal2.padding(1);
for (let i = 1; i < 6; ++i) {
    console.log(ordinal2(i));
}

ordinal2.rangeRound([0, 100]).padding(1);
for (let i = 1; i < 6; ++i) {
    console.log(ordinal2(i));
}