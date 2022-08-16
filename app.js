const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
module.exports = {sum, fromEuroToDollar};


//const sum = (a,b)=>{
    return a + b
//}
//console.log(sum(7,3))
//module.exports={sum};//

let oneEuroIs = {
    "JPY": 127.9, //Japanese Yen
    "USD": 1.2, //US Dollar
    "GBP": 0.8, //British Pound
}
const fromDollarToYen = (a)=>{
    let a = amountDollars;
    let b = 1.2;
    let c = 127.9;
    return a * b / c;
};
console.log(fromDollarToYen(9));

const fromEuroToDollar = (a)=>{
    let a = amountEuros;
    let b = 1.2;
    return a / b;
};
console.log(fromEuroToDollar(12));

const fromYenToPound = (a)=>{
    let a = amountYen;
    let b = 127.9;
    let c = .8;
    return a * b / c
};
console.log(fromYenToPound(120000));