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

    // maps for getting data
    const accord = new Map();
    const civic = new Map();
    const clarity = new Map();
    const crv = new Map();
    const fit = new Map();
    const hrv = new Map();
    const insight = new Map();
    const odyssey = new Map();
    const passport = new Map();
    const pilot = new Map();
    const ridgeline = new Map();

    //using average 13,500 miles annually
    accord.set('1', 81.16);
    accord.set('2', 74.04);
    accord.set('3', 65.70);
    accord.set('4', 59.60);
    accord.set('5', 52.53);

    civic.set('1', 84.38);
    civic.set('2', 78.39);
    civic.set('3', 72.31);
    civic.set('4', 65.50);
    civic.set('5', 58.30);

    clarity.set('1', 77.82);
    clarity.set('2', 74.04);
    clarity.set('3', 65.70);
    clarity.set('4', 59.60);
    clarity.set('5', 52.53);

    crv.set('1', 80.13);
    crv.set('2', 77.59);
    crv.set('3', 71.40);
    crv.set('4', 63.19);
    crv.set('5', 58.94);

    fit.set('1', 78.24);
    fit.set('2', 75.80);
    fit.set('3', 72.22);
    fit.set('4', 64.82);
    fit.set('5', 56.37);

    hrv.set('1', 78.53);
    hrv.set('2', 71.92);
    hrv.set('3', 66.47);
    hrv.set('4', 58.32);
    hrv.set('5', 51.28);

    insight.set('1', 77.82);
    insight.set('2', 70.23);
    insight.set('3', 63.54);
    insight.set('4', 55.73);
    insight.set('5', 49.07);

    odyssey.set('1', 86.12);
    odyssey.set('2', 80.20);
    odyssey.set('3', 68.89);
    odyssey.set('4', 59.17);
    odyssey.set('5', 50.45);

    passport.set('1', 78.53);
    passport.set('2', 71.92);
    passport.set('3', 66.47);
    passport.set('4', 58.32);
    passport.set('5', 51.28);

    pilot.set('1', 82.27);
    pilot.set('2', 79.79);
    pilot.set('3', 68.84);
    pilot.set('4', 61.21);
    pilot.set('5', 52.15);

    ridgeline.set('1', 81.03);
    ridgeline.set('2', 74.07);
    ridgeline.set('3', 68.30);
    ridgeline.set('4', 50.90);
    ridgeline.set('5', 43.32);

    let model = document.getElementById("model").value;
    let age = document.getElementById("age").value;
    let price = parseInt(document.getElementById("bought").value);
    let depval = 0;
    let currentprice = 0;


    switch (model) {
        case model == 'accord':
            switch (age) {
                case age == '1':
                    depval = price * accord['1'];
                    currentprice = price - depval;
                    break;
                case age == '2':
                    depval = price * accord['2'];
                    currentprice = price - depval;
                    break;
                case age == '3':
                    depval = price * accord['3'];
                    currentprice = price - depval;
                    break;
                case age == '4':
                    depval = price * accord['4'];
                    currentprice = price - depval;
                    break;
                case age == '5':
                    depval = price * accord['5'];
                    currentprice = price - depval;
                    break;
                default:

            }
            break;
        case model == 'civic':
            switch (age) {
                case age == '1':
                    depval = price * civic['1'];
                    currentprice = price - depval;
                    break;
                case age == '2':
                    depval = price * civic['2'];
                    currentprice = price - depval;
                    break;
                case age == '3':
                    depval = price * civic['3'];
                    currentprice = price - depval;
                    break;
                case age == '4':
                    depval = price * civic['4'];
                    currentprice = price - depval;
                    break;
                case age == '5':
                    depval = price * civic['5'];
                    currentprice = price - depval;
                    break;
                default:

            }
            break;
        case model == 'clarity':
            switch (age) {
                case age == '1':
                    depval = price * clarity['1'];
                    currentprice = price - depval;
                    break;
                case age == '2':
                    depval = price * clarity['2'];
                    currentprice = price - depval;
                    break;
                case age == '3':
                    depval = price * clarity['3'];
                    currentprice = price - depval;
                    break;
                case age == '4':
                    depval = price * clarity['4'];
                    currentprice = price - depval;
                    break;
                case age == '5':
                    depval = price * clarity['5'];
                    currentprice = price - depval;
                    break;
                default:

            }
            break;
        case model == 'crv':
            switch (age) {
                case age == '1':
                    depval = price * crv['1'];
                    currentprice = price - depval;
                    break;
                case age == '2':
                    depval = price * crv['2'];
                    currentprice = price - depval;
                    break;
                case age == '3':
                    depval = price * crv['3'];
                    currentprice = price - depval;
                    break;
                case age == '4':
                    depval = price * crv['4'];
                    currentprice = price - depval;
                    break;
                case age == '5':
                    depval = price * crv['5'];
                    currentprice = price - depval;
                    break;
                default:

            }
            break;
        case model == 'fit':
            switch (age) {
                case age == '1':
                    depval = price * fit['1'];
                    currentprice = price - depval;
                    break;
                case age == '2':
                    depval = price * fit['2'];
                    currentprice = price - depval;
                    break;
                case age == '3':
                    depval = price * fit['3'];
                    currentprice = price - depval;
                    break;
                case age == '4':
                    depval = price * fit['4'];
                    currentprice = price - depval;
                    break;
                case age == '5':
                    depval = price * fit['5'];
                    currentprice = price - depval;
                    break;
                default:

            }
            break;
        case model == 'hrv':
            switch (age) {
                case age == '1':
                    depval = price * hrv['1'];
                    currentprice = price - depval;
                    break;
                case age == '2':
                    depval = price * hrv['2'];
                    currentprice = price - depval;
                    break;
                case age == '3':
                    depval = price * hrv['3'];
                    currentprice = price - depval;
                    break;
                case age == '4':
                    depval = price * hrv['4'];
                    currentprice = price - depval;
                    break;
                case age == '5':
                    depval = price * hrv['5'];
                    currentprice = price - depval;
                    break;
                default:

            }
            break;
        case model == 'insight':
            switch (age) {
                case age == '1':
                    depval = price * insight['1'];
                    currentprice = price - depval;
                    break;
                case age == '2':
                    depval = price * insight['2'];
                    currentprice = price - depval;
                    break;
                case age == '3':
                    depval = price * insight['3'];
                    currentprice = price - depval;
                    break;
                case age == '4':
                    depval = price * insight['4'];
                    currentprice = price - depval;
                    break;
                case age == '5':
                    depval = price * insight['5'];
                    currentprice = price - depval;
                    break;
                default:

            }
            break;
        case model == 'odyssey':
            switch (age) {
                case age == '1':
                    depval = price * odyssey['1'];
                    currentprice = price - depval;
                    break;
                case age == '2':
                    depval = price * odyssey['2'];
                    currentprice = price - depval;
                    break;
                case age == '3':
                    depval = price * odyssey['3'];
                    currentprice = price - depval;
                    break;
                case age == '4':
                    depval = price * odyssey['4'];
                    currentprice = price - depval;
                    break;
                case age == '5':
                    depval = price * odyssey['5'];
                    currentprice = price - depval;
                    break;
                default:

            }
            break;
        case model == 'passport':
            switch (age) {
                case age == '1':
                    depval = price * passport['1'];
                    currentprice = price - depval;
                    break;
                case age == '2':
                    depval = price * passport['2'];
                    currentprice = price - depval;
                    break;
                case age == '3':
                    depval = price * passport['3'];
                    currentprice = price - depval;
                    break;
                case age == '4':
                    depval = price * passport['4'];
                    currentprice = price - depval;
                    break;
                case age == '5':
                    depval = price * passport['5'];
                    currentprice = price - depval;
                    break;
                default:

            }
            break;

        case model == 'pilot':
            switch (age) {
                case age == '1':
                    depval = price * pilot['1'];
                    currentprice = price - depval;
                    break;
                case age == '2':
                    depval = price * pilot['2'];
                    currentprice = price - depval;
                    break;
                case age == '3':
                    depval = price * pilot['3'];
                    currentprice = price - depval;
                    break;
                case age == '4':
                    depval = price * pilot['4'];
                    currentprice = price - depval;
                    break;
                case age == '5':
                    depval = price * pilot['5'];
                    currentprice = price - depval;
                    break;
                default:

            }
            break;

        case model == 'ridgeline':
            switch (age) {
                case age == '1':
                    depval = price * ridgeline['1'];
                    currentprice = price - depval;
                    break;
                case age == '2':
                    depval = price * ridgeline['2'];
                    currentprice = price - depval;
                    break;
                case age == '3':
                    depval = price * ridgeline['3'];
                    currentprice = price - depval;
                    break;
                case age == '4':
                    depval = price * ridgeline['4'];
                    currentprice = price - depval;
                    break;
                case age == '5':
                    depval = price * ridgeline['5'];
                    currentprice = price - depval;
                    break;
                default:

            }
            break;
        default:


    }
    document.getElementById("depreciation").innerHTML = depval;
    document.getElementById("current price").innerHTML = currentprice;
}