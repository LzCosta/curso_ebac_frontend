"use strict";
function calculaAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.log(`A área do triângulo é de: ${calculaAreaTriangulo(10, 5)}m2`);
function receberNome(nome, sobrenome) {
    return `Olá ${nome}` + ` ${sobrenome}`;
}
console.log(receberNome("Lucas", "Vieira"));
