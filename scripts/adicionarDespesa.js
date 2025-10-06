/**
 * @author Gabriel Monteiro <gabrielmontsilva16@gmail.com>
 * @author Vitor Cruz <provitor39@gmail.com>
 * @author Thiago Gato <thiago.gato17g@gmail.com>
 * @version 1.0.0
 * @since 1.0.0 (05/10/2025)
@file adicionar.js
 * @description
 * Módulo responsável por gerenciar o cadastro e remoção de despesas no sistema.
 * Ele obtém os dados do formulário, salva no armazenamento local (`localStorage`)
 * e atualiza a lista de despesas persistida.
 *
 * @requires getDespesas
 * @requires salvarDespesas
 */

/**
 * Registra uma nova despesa com base nas informações inseridas no formulário.
 *
 * @function adicionarDespesa
 * @description
 * - Captura os valores do formulário de cálculo de despesas.
 * - Cria um novo objeto de despesa contendo:
 *   - Valor
 *   - Categoria
 *   - Receita (valor total de entrada)
 *   - Descrição opcional
 * - Armazena a nova despesa no `localStorage` por meio das funções de armazenamento.
 * - Exibe um alerta de confirmação e reseta o formulário após salvar.
 *
 * @listens submit
 *
 * @example
 * // Estrutura esperada no formulário HTML:
 * // <form id="formCalc">
 * //   <input id="valorDespesa" type="number">
 * //   <select id="categorias"></select>
 * //   <input id="receita" type="number">
 * //   <input id="descricao" type="text">
 * // </form>
 * 
 * @function removerUltimaDespesa
 * @description
 * - Recupera a lista de despesas do `localStorage`.
 * - Verifica se existe ao menos uma despesa cadastrada.
 * - Caso exista, remove o último item da lista e atualiza o armazenamento.
 * - Caso contrário, exibe um alerta informando que não há despesas para remover.
 *
 * @returns {void}
 */

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
