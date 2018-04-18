

import * as d3 from 'd3';

let d3Area = d3.select("#d3-area");
let tr = d3Area.selectAll("table > tbody > tr");
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

let update = tr.data(dataSet);
let enter = update.enter();
let exit = update.exit();

d3.selectAll("table > tbody > tr > td").remove();

update.append("td").text(d => d.id);
update.append("td").text(d => d.name);
update.append("td").text(d => d.sex);
update.append("td").text(d => d.age);
update.append("td").text(d => d.address);

let newTr = enter.select("table > tbody").append("tr");
newTr.append("td").text(d => d.id);
newTr.append("td").text(d => d.name);
newTr.append("td").text(d => d.sex);
newTr.append("td").text(d => d.age);
newTr.append("td").text(d => d.address);

exit.remove();


