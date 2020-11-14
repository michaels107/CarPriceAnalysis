let make = document.getElementById("make").value;
console.log(make);
let model = document.getElementById("model").value;
let currentprice = document.getElementById("currentprice").value;
let tax = document.getElementById("tax").value;
let titles = document.getElementById("titles").value;
let fees = document.getElementById("fees").value;
let miscellaneoustaxes = document.getElementById("miscellaneoustaxes").value;
let warranty = document.getElementById("warranty").value;
let approximatefinalpurchaseprice = document.getElementById("approximatefinalpurchaseprice").value;

let total = currentprice + tax + fees + miscellaneoustaxes + warranty
document.getElementById("approximatefinalpurchaseprice").innerHTML = currentprice + tax + fees + miscellaneoustaxes + warranty;
console.log(total);


