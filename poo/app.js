import modificador from './modificador.js';

console.log(modificador);

var ingredientes = ['mel', 'água', 'sal', 'mostarda'];
var resultadoCapitalizacao = modificador.capitalizar(ingredientes);
var resultadoOrdenacao = modificador.ordenar(resultadoCapitalizacao);
var resultadoCaixaAlta = modificador.caixaAlta(ingredientes);

console.log(resultadoCapitalizacao);
console.log(resultadoOrdenacao);
console.log(resultadoCaixaAlta);