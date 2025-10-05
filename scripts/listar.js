import { getDespesas } from "./storage.js";

export function listarDespesas() {
  const tabela = document.getElementById("tabelaDespesas");
  const saldo = document.getElementById("saldoAtual");

  if (tabela) {
    let despesas = getDespesas();
    let total = 0;

    despesas.forEach((d) => {
      let linha = document.createElement("tr");
      const saldoDescontado = parseFloat(d.receita) - parseFloat(d.valor);
      const saldoAtual = saldoDescontado;

      saldo.textContent = `Saldo Atual: ${saldoAtual.toFixed(2)}`;
      linha.innerHTML = `
        <td>R$ ${d.receita}</td>
        <td>R$ ${d.valor}</td>
        <td>${d.categoria}</td>
        <td>${d.dataFormatada}</td>
        <td>R$${saldoDescontado.toFixed(2)}</td>
      `;

      tabela.appendChild(linha);
    });
  }
}
