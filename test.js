// Importar la función sum del archivo app.js
const { fromEuroToDollar, fromDollarToYen, fromYentoPound  } = require('./app.js');

test("One yen should be 0.87 Pound", function() {
    expect(fromYentoPound(1.2)).toBe(1.044);
})

test("One euro should be 1.07 dollars", function() {
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dolar should be 156.5 yens", function() {
    expect(fromDollarToYen(2.5)).toBe(391.25);
})
