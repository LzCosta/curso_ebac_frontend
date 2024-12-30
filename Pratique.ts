function calculaAreaTriangulo(base: number, altura: number): number {
  return (base * altura) / 2;
}

console.log(`A área do triângulo é de: ${calculaAreaTriangulo(10, 5)}m2`);

function receberNome(nome: string, sobrenome: string): string {
  return `Olá ${nome}` + ` ${sobrenome}`;
}

console.log(receberNome("Lucas", "Vieira"));
