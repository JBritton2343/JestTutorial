


const sum = (a,b)=>{
    return a + b
}
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, //Japanese Yen
    "USD": 1.2, //US Dollar
    "GBP": 0.8, //British Pound
}

const fromDollarToYen = function(valueInEuro){
    // convert given in Euros to Dollars
    let valInDollars = valueInEuro * 1.2;
    // covert value in Yen to dollars
    let valInYen = valInDollars * 127.9;
    // value in yen
    return valInYen;
    
}
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
const fromYenToPound = function (valueInEuro){
    //convert given value in Yen to Euros;
    let valueInEuro = valInYen / 127.9;
    //covert value in Euro to Pounds;
    let valinPounds = valueInEuro / .8;
    //return value in Pounds
    return valinPounds;
}

module.exports={sum, fromEuroToDollar};
