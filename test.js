// const{sum} = require(`./app.js`)

// // const { fromYenToPund } = require("./app");

// test(`adds 14 + 9 to equal 23`,() => {
//  let total = sum(14,9)

//  expect(total).toBe(23)
// },
// )

test("One euro should be 1.07 dollars", function(){
const{fromEuroToDollar} = require("./app.js")

const dollars = fromEuroToDollar(3.5);
const esperado = 3.5*1.07;

expect(dollars).toBe(esperado)

}
)

test(`One dollar should be 156.5 Yens`,function(){
const{fromDollarToYen} =require(`./app.js`)

const yens = fromDollarToYen(3.5)
const esperado =  3.5 * 156.5

expect(yens).toBe(esperado)
}
)

test(`One Yen should be 0.86 Pund`,function(){

const{fromYenToPound} = require(`./app.js`)

const pound = fromYenToPound(3.5)
const esperado = 3.5*0.87

expect(pound).toBe(esperado)




}
)