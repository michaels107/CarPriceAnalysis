let make = document.getElementById("make").value;
let model = document.getElementById("model").value;
let currentprice = document.getElementById("currentprice").value;

let taxpercent = document.getElementById("taxpercent").value;
let tax = document.getElementById("tax").value;
let titles = document.getElementById("titles").value;
let fees = document.getElementById("fees").value;
let miscellaneoustaxes = document.getElementById("miscellaneoustaxes").value;
let warranty = document.getElementById("warranty").value;
let approximatefinalpurchaseprice = document.getElementById("approximatefinalpurchaseprice").value;
let other = document.getElementById("other").value;
let year = document.getElementById("year").value;

totalTax = (taxpercent/100) * parseInt(currentprice);



function findFinalPrice(){
    document.getElementById("tax").innerHTML = totalTax;
    let total = parseFloat(currentprice) + parseFloat(totalTax) + parseFloat(titles) + parseFloat(fees) + parseFloat(miscellaneoustaxes) + parseFloat(warranty) + parseFloat(other);
    console.log("---");
    console.log(currentprice);
    console.log(totalTax);
    console.log(titles);
    console.log(fees);
    console.log(miscellaneoustaxes);
    console.log(warranty);
    console.log("---");
    document.getElementById("approximatefinalpurchaseprice").innerHTML = total;
    console.log(total);
}


