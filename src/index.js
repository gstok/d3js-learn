

import * as d3 from 'd3';

let d3Area = d3.select("#d3-area");
let li = d3Area.selectAll("ul > li");
let dataSet = [
    {
        id: 72,
        name: "顾世豪",
        sex: "男",
        age: 24,
        address: "浙江省杭州市"
    },
    {
        id: 36,
        name: "习近平",
        sex: "男",
        age: "72",
        address: "陕西某一个窑洞里"
    },
    {
        id: 10,
        name: "彭丽媛",
        sex: "女",
        age: "61",
        address: "我也不知道是哪里人"
    }
];


function bindData (dataSet) {
    li.data(dataSet);
    let indiv = li.append("div");
    indiv
    .append("a").attr("href", "#").text(d => d.id);
    indiv
    .append("input").attr("type", "text").property("value", (d, i) => {
        return d.name;
    })
    indiv
    .append("span").text("男");
    indiv
    .append("input").attr("type", "radio").property("checked", d => d.sex == "男");
    indiv
    .append("span").text("女");
    indiv
    .append("input").attr("type", "radio").property("checked", d => d.sex == "女");
    indiv
    .append("span").text("年龄");
    indiv
    .append("input").attr("type", "range").attr("min", 0).attr("max", 100).property("value", d => d.age);
    indiv
    .append("textarea").text(d => d.address);
}

bindData(dataSet);
li.select("div").remove();

dataSet = [
    {
        id: 10,
        name: "顾世豪",
        sex: "男",
        age: 24,
        address: "浙江省杭州市"
    },
    {
        id: 36,
        name: "习近平",
        sex: "男",
        age: "72",
        address: "陕西某一个窑洞里"
    },
    {
        id: 72,
        name: "彭丽媛",
        sex: "女",
        age: "61",
        address: "我也不知道是哪里人"
    }
];

li.data(dataSet, d => d.id);
let indiv = li.append("div");
indiv
.append("a").attr("href", "#").text(d => d.id);
indiv
.append("input").attr("type", "text").property("value", (d, i) => {
    return d.name;
})
indiv
.append("span").text("男");
indiv
.append("input").attr("type", "radio").property("checked", d => d.sex == "男");
indiv
.append("span").text("女");
indiv
.append("input").attr("type", "radio").property("checked", d => d.sex == "女");
indiv
.append("span").text("年龄");
indiv
.append("input").attr("type", "range").attr("min", 0).attr("max", 100).property("value", d => d.age);
indiv
.append("textarea").text(d => d.address);


console.log(li.size());