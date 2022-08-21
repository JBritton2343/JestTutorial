const { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen } = require('./app.js');
//first test
test('adds 14 + 9 to equal 23', ()=>{
let total=sum(14, 9);
expect(total).toBe(23);
});
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});
test("One Yen is 136.93 USD", function(){

    // use the function as intended
    const yen = fromDollarToYen(60);

    // if one Dollar is 136.93 Yen
    const expected = 60 * 136.93;

    //comparison for the unit test
    expect(Math.round(fromDollarToYen(60)*10)/10).toBe(8215.8);


});

test("One Pound Sterling is 161.95 Yen", function(){

    //use the function properly
    const pounds = fromYenToPound(10000);

    //if one pound is 161.95 Yen
    const expected = 10000 / 161.95

    

    // now we return the value in Pounds
    expect(Math.round(fromYenToPound(10000)*100)/100).toBe(61.75);

});
module.exports={sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};