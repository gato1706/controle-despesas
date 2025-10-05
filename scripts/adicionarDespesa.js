import { getDespesas, salvarDespesas } from "./storage.js";

export function adicionarDespesa() {
  const form = document.getElementById("formCalc");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const valor = parseFloat(document.getElementById("valorDespesa").value);
      const categoria = document.getElementById("categorias").value;
      const receita = document.getElementById("receita").value;
      const dataInput = document.getElementById("data").value;
      const descricao = document.getElementById("descricao").value;

      const [ano, mes, dia] = dataInput.split("-");
      const dataFormatada = `${dia}/${mes}/${ano}`;

      console.log(dataFormatada); // "02/10/2025"

      const novaDespesa = { valor, categoria, receita, dataFormatada, descricao };

      let despesas = getDespesas();
      despesas.push(novaDespesa);
      salvarDespesas(despesas);

      alert("Despesa adicionada!");
      form.reset();
    });
  }
}
