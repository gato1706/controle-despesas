/**
 * @author Gabriel Monteiro <gabrielmontsilva16@gmail.com>
 * @author Vitor Cruz <provitor39@gmail.com>
 * @author Thiago Gato <thiago.gato17g@gmail.com>
 * @version 1.0.0
 * @since 1.0.0 (05/10/2025)
 * @function getDespesas
 * @description
 * Esta função lê a chave `"despesas"` do `localStorage`, converte o conteúdo
 * de JSON para um array de objetos e retorna o resultado.
 * Caso não exista nada armazenado, retorna um array vazio.
 *
 * @returns {Array<Object>} Um array de objetos de despesa.
 *
 * @example
 * // Exemplo de retorno:
 * // [
 * //   { despesa: 120, categoria: "Transporte", receita: 1200, descricao: "Uber" },
 * //   { despesa: 45, categoria: "Alimentação", receita: 1000, descricao: "Lanche" }
 * // ] 
 */

export function getDespesas() {
  return JSON.parse(localStorage.getItem("despesas")) || [];
}

export function salvarDespesas(despesas) {
  localStorage.setItem("despesas", JSON.stringify(despesas));
}
