import { getDespesas } from "./storage.js"


export function listarDespesas(){
  const tabela = document.getElementById("tabelaDespesas")

  if (tabela) {
    let despesas = getDespesas();

    despesas.forEach((d) => {
      let linha = document.createElement("tr")

      linha.innerHTML = `
        <td>R$ ${d.valor}</td>
        <td>${d.categoria}</td>
        <td>${d.dataFormatada}</td>
      `;

      tabela.appendChild(linha);
    });
  }

}
