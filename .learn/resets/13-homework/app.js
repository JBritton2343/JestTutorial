const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}


const sum = (a,b)=>{
    return a + b
}
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, //Japanese Yen
    "USD": 1.2, //US Dollar
    "GBP": 0.8, //British Pound
}
let a = '';
const fromDollarToYen = (a)=>{
    
    let b = 1.2;
    let c = 127.9;
    return a * b / c;
};
console.log(fromDollarToYen(9));



const fromYenToPound = (a)=>{
   
    let b = 127.9;
    let c = .8;
    return a * b / c
};
console.log(fromYenToPound(120000));
module.exports={sum, fromEuroToDollar};
