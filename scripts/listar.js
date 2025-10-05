import { getDespesas } from "./storage.js"


export function listarDespesas(){
  const tabela = document.getElementById("tabelaDespesas")
  const saldo = document.getElementById("saldoMensal")

  if (tabela) {
    let despesas = getDespesas();
    let total = 0

    despesas.forEach((d) => {

      total += parseFloat(d.valor)
      let linha = document.createElement("tr")

      linha.innerHTML = `
        <td>R$ ${d.valor}</td>
        <td>${d.categoria}</td>
        <td>${d.dataFormatada}</td>
      `;

      tabela.appendChild(linha);
    });

    saldo.textContent = `Saldo: R$ ${total.toFixed(2)}`
  }

}
