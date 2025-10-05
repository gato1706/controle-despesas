import { getDespesas } from "./storage.js";


export function listarDespesas(categoriaFiltro = "") {
  const tabela = document.getElementById("tabelaDespesas");
  // Elementos do novo relatório mensal
  const relatorioReceitasEl = document.getElementById("relatorioReceitas");
  const relatorioDespesasEl = document.getElementById("relatorioDespesas");
  const relatorioSaldoEl = document.getElementById("relatorioSaldo");

  // Verifica se estamos na página de despesas (checando a existência da tabela e do relatório)
  if (tabela && relatorioReceitasEl) {
    let despesas = getDespesas();
    tabela.innerHTML = ""; // Limpa a tabela antes de preencher

    // Calcula o saldo total (considerando TODAS as despesas)
    const receitaTotal = parseFloat(despesas[0]?.receita || 0);
    const despesaTotal = despesas.reduce(
      (acc, d) => acc + parseFloat(d.valor),
      0
    );
    const saldoFinal = receitaTotal - despesaTotal;

    // Preenche os dados do relatório mensal
    relatorioReceitasEl.textContent = `R$ ${receitaTotal.toFixed(2)}`;
    relatorioDespesasEl.textContent = `R$ ${despesaTotal.toFixed(2)}`;
    relatorioSaldoEl.textContent = `R$ ${saldoFinal.toFixed(2)}`;

    // Filtra as despesas que devem ser mostradas na tabela
    const despesasParaExibir =
      categoriaFiltro && categoriaFiltro !== ""
        ? despesas.filter((d) => d.categoria === categoriaFiltro)
        : despesas;

    // Cria as linhas da tabela com as despesas filtradas
    let saldoCorrente = receitaTotal;
    // Itera sobre TODAS as despesas para calcular o saldo corrente corretamente
    despesas.forEach((d) => {
      const valorDespesa = parseFloat(d.valor);
      saldoCorrente -= valorDespesa; // O saldo corrente é sempre atualizado

      // Adiciona a linha na tabela APENAS se ela pertencer ao conjunto filtrado
      if (despesasParaExibir.includes(d)) {
        let linha = document.createElement("tr");
        linha.innerHTML = `
          <td>R$ ${parseFloat(d.receita).toFixed(2)}</td>
          <td>R$ ${valorDespesa.toFixed(2)}</td>
          <td>${d.categoria}</td>
          <td>R$ ${saldoCorrente.toFixed(2)}</td>
          <td>${d.descricao || "-"}</td>
        `;
        tabela.appendChild(linha);
      }
    });
  }
}
