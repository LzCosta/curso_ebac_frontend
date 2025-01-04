<script setup>
import { reactive } from "vue";
import Cabecalho from "./components/Cabecalho.vue";
import Operacao from "./components/Operacao.vue";
import Resultado from "./components/Resultado.vue";

const estado = reactive({
  operation: "+",
  num1: "",
  num2: "",
});

const resultado = () => {
  const { operation } = estado;
  switch (operation) {
    case "-":
      return parseFloat(estado.num1) - parseFloat(estado.num2);
    case "*":
      return parseFloat(estado.num1) * parseFloat(estado.num2);
    case "/":
      return parseFloat(estado.num1) / parseFloat(estado.num2);
    default:
      return parseFloat(estado.num1) + parseFloat(estado.num2);
  }
};
</script>
<style></style>

<template>
  <body>
    <div class="container">
      <cabecalho />
      <Operacao
        :operacao="(evento) => (estado.operation = evento.target.value)"
        :num1="(evento) => (estado.num1 = evento.target.value)"
        :num2="(evento) => (estado.num2 = evento.target.value)"
      ></Operacao>
      <resultado
        :num1="estado.num1"
        :num2="estado.num2"
        :result="resultado()"
      />
    </div>
  </body>
</template>
