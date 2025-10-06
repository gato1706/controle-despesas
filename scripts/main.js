import { adicionarDespesa, removerUltimaDespesa } from "./adicionarDespesa.js";
import { listarDespesas } from "./listar.js";


document.addEventListener("DOMContentLoaded", () => {
  // Lógica da página de cadastro (index.html)
  adicionarDespesa();

  // Lógica da página de listagem (despesas.html)
  listarDespesas(); // Mostra todas as despesas ao carregar a página

  const btnFiltrar = document.getElementById("btnFiltrar");
  if (btnFiltrar) {
    btnFiltrar.addEventListener("click", () => {
      const categoria = document.getElementById("filtroCategoria").value;
      listarDespesas(categoria);
    });
  }
      const btnRemoverUltima = document.getElementById("btnRemoverUltima");
  if (btnRemoverUltima) {
    btnRemoverUltima.addEventListener("click", () => {
      removerUltimaDespesa()
      listarDespesas()
    });
  }})