import { getDespesas } from "./storage.js";

export function listarDespesas(categoriaFiltro = "") {
  const tabela = document.getElementById("tabelaDespesas");
  const saldoEl = document.getElementById("saldoAtual");

  if (tabela && saldoEl) {
    let despesas = getDespesas();
    tabela.innerHTML = ""; // Limpa a tabela antes de preencher

    // Calcula o saldo total (considerando TODAS as despesas)
    const receitaTotal = parseFloat(despesas[0]?.receita || 0);
    const despesaTotal = despesas.reduce(
      (acc, d) => acc + parseFloat(d.valor),
      0
    );
    const saldoFinal = receitaTotal - despesaTotal;
    saldoEl.textContent = `Saldo Atual: R$ ${saldoFinal.toFixed(2)}`;

    // Filtra as despesas que devem ser mostradas na tabela
    const despesasParaExibir =
      categoriaFiltro && categoriaFiltro !== ""
        ? despesas.filter((d) => d.categoria === categoriaFiltro)
        : despesas;

    // Cria as linhas da tabela com as despesas filtradas
    let saldoCorrente = receitaTotal;
    despesasParaExibir.forEach((d) => {
      saldoCorrente -= parseFloat(d.valor); // Este saldo é progressivo para os itens exibidos
      let linha = document.createElement("tr");
      linha.innerHTML = `
        <td>R$ ${parseFloat(d.receita).toFixed(2)}</td>
        <td>R$ ${parseFloat(d.valor).toFixed(2)}</td>
        <td>${d.categoria}</td>
        <td>${d.dataFormatada}</td>
        <td>R$${saldoCorrente.toFixed(2)}</td>
        <td>${d.descricao || "-"}</td>
      `;

      tabela.appendChild(linha);
    });
  }
}
