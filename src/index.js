

import * as d3 from 'd3';

let d3Area = d3.select("#d3-area");
let li = d3Area.selectAll("ul > li");
let dataSet = [
    {
        name: "顾世豪",
        sex: "男",
        age: 24,
        address: "浙江省杭州市"
    },
    {
        name: "习近平",
        sex: "男",
        age: "72",
        address: "陕西某一个窑洞里"
    },
    {
        name: "彭丽媛",
        sex: "女",
        age: "61",
        address: "我也不知道是哪里人"
    }
];

li.data(dataSet);

li
.append("a").attr("href", "#").text((d, i) => i.toString());
li
.append("input").attr("type", "text").property("value", (d, i) => {
    return d.name;
})
li
.append("span").text("男");
li
.append("input").attr("type", "radio").property("checked", d => d.sex == "男");
li
.append("span").text("女");
li
.append("input").attr("type", "radio").property("checked", d => d.sex == "女");
li
.append("span").text("年龄");
li
.append("input").attr("type", "range").attr("min", 0).attr("max", 100).property("value", d => d.age);
li
.append("textarea").text(d => d.address);

console.log(li.size());