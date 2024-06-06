

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)



// ejercicio 11

const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInYen = valueInDollar * 156.5;
    // Retornamos el valor en dólares
    return valueInYen;
}
const fromEuroToDollar	 = function(valueInEuros) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuros * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromYentoPound = function(valueInYen) {
    // Convertimos el valor a dólares
    let valueInPound = valueInYen * 0.87;
    // Retornamos el valor en dólares
    return valueInPound;
}

module.exports = { fromEuroToDollar,fromDollarToYen,fromYentoPound }
