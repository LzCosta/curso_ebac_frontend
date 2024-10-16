let submitBotao = (document.getElementById("button-check").onclick =
  function () {
    let valor1 = document.getElementById("inputNumero1").value;
    let valor2 = document.getElementById("inputNumero2").value;
    if (valor2 > valor1) {
      alert("O formulário é válido!");
    } else {
      alert("O formulário é inválido!");
    }
  });
