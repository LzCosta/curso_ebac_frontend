// Função de uma abstração
function Pessoa(nome, sexo) {
  this.nome = nome;
  this.sexo = sexo;
}

// Função herdeira 1
function Diretor(nome, sexo, salario) {
  Pessoa.call(this, nome, sexo);
  this.salario = salario;
}

// Função herdeira 2
function Professor(nome, sexo, salario, materia) {
  Diretor.call(this, nome, sexo, salario);
  this.materia = materia;
}

// Instância de objeto 1
const diretor1 = new Diretor("Josualdo", "Masculino", "R$ 11.000,00");

// Instância de objeto 2
const professor1 = new Professor(
  "Lucas",
  "Masculino",
  "R$ 5.000,00",
  "Matemática"
);

// Instância de objeto 3
const professor2 = new Professor(
  "William",
  "Masculino",
  "R$ 9.000,00",
  "Física"
);

console.log(diretor1);
console.log(professor1);
console.log(professor2);
