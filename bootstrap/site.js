function findFinalPrice() {
    let currentprice = document.getElementById("currentprice").value;
    let taxpercent = document.getElementById("taxpercent").value;
    let titles = document.getElementById("titles").value;
    let fees = document.getElementById("fees").value;
    let miscellaneoustaxes = document.getElementById("miscellaneoustaxes").value;
    let warranty = document.getElementById("warranty").value;
    let other = document.getElementById("other").value;

    totalTax = (taxpercent / 100) * parseInt(currentprice);
    //console.log(totalTax);
    document.getElementById("tax").innerHTML = totalTax;
    let total = parseFloat(currentprice) + parseFloat(totalTax) + parseFloat(titles) + parseFloat(fees) + parseFloat(miscellaneoustaxes) + parseFloat(warranty) + parseFloat(other);
    //console.log("---");
    //console.log(currentprice);
    //console.log(taxpercent);
    // console.log(totalTax);
    //console.log(titles);
    //console.log(fees);
    //console.log(miscellaneoustaxes);
    //console.log(warranty);
    //console.log(other);
    // console.log("---");
    document.getElementById("final price").innerHTML = total;
    // console.log(total);
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

function getDepreciationValue() {
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

    let model = document.getElementById("model").value.toLowerCase();
    let age = document.getElementById("age").value.toLowerCase();
    let price = parseInt(document.getElementById("bought").value);
    let depreciation = 0;
    let depval = 0;
    let currentprice = 0;
    //console.log(age);

    switch (model) {

        case 'accord':
            switch (age) {
                case 'new':
                    depval = price;
                    currentprice = price;
                    break;
            }
            switch (age) {
                case '1':
                    depval = price * (1 - accord.get('1') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '2':
                    depval = (price * (1 - accord.get('2') / 100));
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '3':
                    depval = price * (1 - accord.get('3') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '4':
                    depval = price * (1 - accord.get('4') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '5':
                    depval = price * (1 - accord.get('5') / 100);
                    currentprice = price - depval;
                    break;
            }
    }

    switch (model) {
        case 'civic':
            switch (age) {
                case 'new':
                    depval = price;
                    currentprice = price;
                    break;
            }
            switch (age) {
                case '1':
                    depval = price * (1 - civic.get('1') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '2':
                    depval = price * (1 - civic.get('2') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '3':
                    depval = price * (1 - civic.get('3') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '4':
                    depval = price * (1 - civic.get('4') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '5':
                    depval = price * (1 - civic.get('5') / 100);
                    currentprice = price - depval;
                    break;
            }
    }

    switch (model) {
        case 'clarity':
            switch (age) {
                case 'new':
                    depval = price;
                    currentprice = price;
                    break;
            }
            switch (age) {
                case '1':
                    depval = price * (1 - clarity.get('1') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '2':
                    depval = price * (1 - clarity.get('2') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '3':
                    depval = price * (1 - clarity.get('3') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '4':
                    depval = price * (1 - clarity.get('4') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '5':
                    depval = price * (1 - clarity.get('5') / 100);
                    currentprice = price - depval;
                    break;
            }
    }

    switch (model) {
        case 'cr-v':
            switch (age) {
                case 'new':
                    depval = price;
                    currentprice = price;
                    break;
            }
            switch (age) {
                case '1':
                    depval = price * (1 - crv.get('1') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '2':
                    depval = price * (1 - crv.get('2') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '3':
                    depval = price * (1 - crv.get('3') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '4':
                    depval = price * (1 - crv.get('4') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '5':
                    depval = price * (1 - crv.get('5') / 100);
                    currentprice = price - depval;
                    break;
            }
    }

    switch (model) {
        case 'fit':
            switch (age) {
                case 'new':
                    depval = price;
                    currentprice = price;
                    break;
            }
            switch (age) {
                case '1':
                    depval = price * (1 - fit.get('1') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '2':
                    depval = price * (1 - fit.get('2') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '3':
                    depval = price * (1 - fit.get('3') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '4':
                    depval = price * (1 - fit.get('4') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '5':
                    depval = price * (1 - fit.get('5') / 100);
                    currentprice = price - depval;
                    break;
            }
    }

    switch (model) {
        case 'hr-v':
            switch (age) {
                case 'new':
                    depval = price;
                    currentprice = price;
                    break;
            }
            switch (age) {
                case '1':
                    depval = price * (1 - hrv.get('1') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '2':
                    depval = price * (1 - hrv.get('2') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '3':
                    depval = price * (1 - hrv.get('3') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '4':
                    depval = price * (1 - hrv.get('4') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '5':
                    depval = price * (1 - hrv.get('5') / 100);
                    currentprice = price - depval;
                    break;
            }
    }

    switch (model) {
        case 'insight':
            switch (age) {
                case 'new':
                    depval = price;
                    currentprice = price;
                    break;
            }
            switch (age) {
                case '1':
                    depval = price * (1 - insight.get('1') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '2':
                    depval = price * (1 - insight.get('2') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '3':
                    depval = price * (1 - insight.get('3') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '4':
                    depval = price * (1 - insight.get('4') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '5':
                    depval = price * (1 - insight.get('5') / 100);
                    currentprice = price - depval;
                    break;
            }
    }

    switch (model) {
        case 'odyssey':
            switch (age) {
                case 'new':
                    depval = price;
                    currentprice = price;
                    break;
            }
            switch (age) {
                case '1':
                    depval = price * (1 - odyssey.get('1') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '2':
                    depval = price * (1 - odyssey.get('2') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '3':
                    depval = price * (1 - odyssey.get('3') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '4':
                    depval = price * (1 - odyssey.get('4') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '5':
                    depval = price * (1 - odyssey.get('5') / 100);
                    currentprice = price - depval;
                    break;
            }
    }

    switch (model) {
        case 'passport':
            switch (age) {
                case 'new':
                    depval = price;
                    currentprice = price;
                    break;
            }
            switch (age) {
                case '1':
                    depval = price * (1 - passport.get('1') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '2':
                    depval = price * (1 - passport.get('2') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '3':
                    depval = price * (1 - passport.get('3') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '4':
                    depval = price * (1 - passport.get('4') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '5':
                    depval = price * (1 - passport.get('5') / 100);
                    currentprice = price - depval;
                    break;
            }
    }

    switch (model) {
        case 'pilot':
            switch (age) {
                case 'new':
                    depval = price;
                    currentprice = price;
                    break;
            }
            switch (age) {
                case '1':
                    depval = price * (1 - pilot.get('1') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '2':
                    depval = price * (1 - pilot.get('2') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '3':
                    depval = price * (1 - pilot.get('3') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '4':
                    depval = price * (1 - pilot.get('4') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '5':
                    depval = price * (1 - pilot.get('5') / 100);
                    currentprice = price - depval;
                    break;
            }
    }

    switch (model) {
        case 'ridgeline':
            switch (age) {
                case 'new':
                    depval = price;
                    currentprice = price;
                    break;
            }
            switch (age) {
                case '1':
                    depval = price * (1 - ridgeline.get('1') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '2':
                    depval = price * (1 - ridgeline.get('2') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '3':
                    depval = price * (1 - ridgeline.get('3') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '4':
                    depval = price * (1 - ridgeline.get('4') / 100);
                    currentprice = price - depval;
                    break;
            }
            switch (age) {
                case '5':
                    depval = price * (1 - ridgeline.get('5') / 100);
                    currentprice = price - depval;
                    break;
            }
    }
    document.getElementById("depreciation").innerHTML = parseFloat(depval).toFixed(2);
    document.getElementById("current price").innerHTML = parseFloat(currentprice).toFixed(2);
}