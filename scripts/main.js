import { despesas } from "./state.js"

document.addEventListener("DOMContentLoaded", () => {
  const btnAdicionar = document.getElementById("btnAdicionar")

  btnAdicionar.addEventListener("click", () => {
    let valor = parseFloat(document.getElementById("valorDespesa").value)
    let categoria = document.getElementById("categoria").value

    if (isNaN(valor) || valor <= 0) {
      alert("Valor da despesa deve ser maior que 0")
      return
    }

    const novaDespesa = { valor, categoria }
    despesas.push(novaDespesa)

    console.log("Despesa adicionada:", novaDespesa)
    console.log("Todas as despesas:", despesas)
  })
})
