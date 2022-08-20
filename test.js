const { sum, fromEuroToDollar } = require('./app.js');
//first test
test('adds 14 + 9 to equal 23', ()=>{
let total=sum(14, 9);
expect(total).toBe(23);
});
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});
test("One Euro should be 1.2 dollars", function(){
    // importing function from js file
    const { fromDollarToYen } = require('./app.js') 

    // if one Euro is 1.2 dollars, then 35 euros shouold be (35 * 1.2)
    const dollars = fromEuroToDollar(35)
    
    expect(fromEuroToDollar(35)).toBe(42);

    // with that value set we can now test the coversion to yen
    const yen = fromDollarsToYen(42)
    const expected = 42 *  127.9;

    // now we return the value in Yen
    expect(fromDollarToYen(42)).toBe(5371.8);


})

test("One Euro is should be .8 pounds", function(){

    //import function from js file
    const{fromYenToPound}=require('./app.js')

    //if one Euro is 127.9 Yen, then 10000000 yen should be (100000000 / 127.9)
    const yen = valInYen(10000000)
    const yenConverted = 10000000 / 127.9 

    // with the euros determined we can now convert that to Pounds
    const pounds = fromEuroToPounds(78186.08)
    const expected = 78186.08 / .8

    // now we return the value in Pounds
    expect(fromYenToPound(78186.08)).toBe(97732.60)

})