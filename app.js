


const sum = (a,b)=>{
    return a + b
}
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, //Japanese Yen
    "USD": 1.2, //US Dollar
    "GBP": 0.8, //British Pound
}
let oneYenIs = {
    "USD": 136.93, //US Dollar
    "GBP": 161.95, //Brittish Pound Sterling
}

const fromDollarToYen = function(valInDollars){
    //converting dollars to Yen
    valInYen = valInDollars * 136.93
    return valInYen;
    
}
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
const fromYenToPound = function (valInYen){
    // coverting Yen to GBP
    valInPounds = valInYen / 161.95
    return valInPounds;
}

module.exports={sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
