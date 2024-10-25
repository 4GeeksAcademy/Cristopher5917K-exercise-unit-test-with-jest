// const sum = (num1, num2) =>{
//      return num1+num2
// };
// console.log(sum(14,9))

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.07
    return valueInDollar
};

const fromDollarToYen =  function(valueInDollar) {
    let valueInYen = valueInDollar*156.5

    return valueInYen
};

const fromYenToPound =  function(valueInYen) {
    let valueInBPound = valueInYen *0.87
n
    return valueInBPound
};
let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87, 
}

module.exports = {fromEuroToDollar,fromDollarToYen,fromYenToPound  }

// 