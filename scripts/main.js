import { adicionarDespesa, removerUltimaDespesa } from "./adicionarDespesa.js";
import { listarDespesas } from "./listar.js";
/**
 * @author Gabriel Monteiro <gabrielmontsilva16@gmail.com>
 * @author Vitor Cruz <provitor39@gmail.com>
 * @author Thiago Gato <thiago.gato17g@gmail.com>
 * @version 1.0.0
 * @since 1.0.0 (05/10/2025)
 * 
 * Inicializa o comportamento principal da aplicação de controle de despesas.
 *
 * @file main.js
 * @description
 * Este módulo coordena a lógica da aplicação:
 * - Inicializa o cadastro de novas despesas (index.html)
 * - Exibe a listagem de despesas (despesas.html)
 * - Gerencia a filtragem de despesas por categoria
 *
 * O código é executado assim que o conteúdo da página é totalmente carregado (evento `DOMContentLoaded`).
 *
 * @see adicionarDespesa
 * @see listarDespesas
 */
 

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