import { getDespesas, salvarDespesas } from "./storage.js";

export function adicionarDespesa() {
  const form = document.getElementById("formCalc");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const valor = parseFloat(document.getElementById("valorDespesa").value);
      const categoria = document.getElementById("categorias").value;
      const receita = document.getElementById("receita").value;
     
      const descricao = document.getElementById("descricao").value;



            const novaDespesa = { valor, categoria, receita, descricao };

            let despesas = getDespesas();
            despesas.push(novaDespesa);
            salvarDespesas(despesas);

            alert("Despesa adicionada!");
            form.reset();
    });
    }
}

export function removerUltimaDespesa() {
    let despesas = getDespesas();

    if (despesas.length > 0) {
        despesas.pop();
        salvarDespesas(despesas);
        alert("Última despesa removida!");
    } else {
        alert("Não há despesas para remover.");
    }
}
