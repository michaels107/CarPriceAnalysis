function findFinalPrice() {
    let currentprice = document.getElementById("currentprice").value;
    let taxpercent = document.getElementById("taxpercent").value;
    let titles = document.getElementById("titles").value;
    let fees = document.getElementById("fees").value;
    let miscellaneoustaxes = document.getElementById("miscellaneoustaxes").value;
    let warranty = document.getElementById("warranty").value;
    let other = document.getElementById("other").value;

    totalTax = (taxpercent / 100) * parseInt(currentprice);
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
    document.getElementById("final price").innerHTML = total;
    console.log(total);
}

function findFinalMaintainencePrice() {
    let interval = document.getElementById("Service Interval").value;
    let cost = document.getElementById("costservice").value;
    let current = document.getElementById("miles").value;
    let ending = document.getElementById("endmiles").value;

    let numServices = (parseInt(ending) - parseInt(current)) / parseInt(interval);
    let finalcost = numServices * parseInt(cost);

    document.getElementById("final cost").innerHTML = finalcost;
    document.getElementById("services").innerHTML = numServices;
}

function findFinalDepreciationPrice() {

}