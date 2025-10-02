import { getDespesas, salvarDespesas } from "./storage.js";


export function adicionarDespesa(){

  const form = document.getElementById("formCalc");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const valor = parseFloat(document.getElementById("valorDespesa").value);
      const categoria = document.getElementById("categoria").value;
      const receita = document.getElementById("receita").value;


      const novaDespesa = { valor, categoria, receita};

      let despesas = getDespesas();
      despesas.push(novaDespesa);
      salvarDespesas(despesas);

      alert("Despesa adicionada!");
      form.reset();
    });
  }
}
