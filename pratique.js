"use strict";

var alunos = [{
  nome: "Gustavo",
  nota: "9"
}, {
  nome: "Julia",
  nota: "8"
}, {
  nome: "Paula",
  nota: "6"
}, {
  nome: "Wagner",
  nota: "5"
}, {
  nome: "Lucio",
  nota: "3"
}];
var FiltroDeAlunos = alunos.filter(function (aluno) {
  return aluno.nota >= 6;
});
console.log(FiltroDeAlunos);