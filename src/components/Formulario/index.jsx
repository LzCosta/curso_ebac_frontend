import { useState, useEffect } from "react";

const Formulario = () => {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);

  const renderizaResultadoIMC = () => {
    const calculoIMC = peso / Math.pow(altura / 100, 2);
    const resultadoIMC = calculoIMC.toFixed(1);

    if (resultadoIMC < 18.5) {
      return <p>Seu IMC é de {resultadoIMC} e sua classificação é magreza.</p>;
    } else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) {
      return <p>Seu IMC é de {resultadoIMC} e sua classificação é normal.</p>;
    } else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) {
      return (
        <p>Seu IMC é de {resultadoIMC} e sua classificação é sobrepeso.</p>
      );
    } else if (resultadoIMC >= 30 && resultadoIMC <= 39.9) {
      return (
        <p>Seu IMC é de {resultadoIMC} e sua classificação é obesidade.</p>
      );
    } else {
      return (
        <p>
          Seu IMC é de {resultadoIMC} e sua classificação é obesidade grave.
        </p>
      );
    }
  };

  return (
    <>
      <h1>Cálculo IMC</h1>
      <form>
        <input
          type="number"
          placeholder="Altura, em cm"
          onChange={({ target }) => setAltura(parseInt(target.value))}
        />
        <input
          type="number"
          placeholder="Peso, em kg"
          onChange={(evento) => setPeso(parseFloat(evento.target.value))}
        />
        {renderizaResultadoIMC()}
      </form>
    </>
  );
};

export default Formulario;
