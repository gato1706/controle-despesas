let despesas = [];

document.addEventListener("DOMContentLoaded", function () {
  // 2. Carrega os produtos do Local Storage
  function carregaProdutosLocalStorage() {
    despesas = JSON.parse(localStorage.getItem("despesas")) || [];
  }
  carregaProdutosLocalStorage();
});

export function AdicionarDespesa(){

  const form = document.getElementById("formCalc");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const valor = parseFloat(document.getElementById("valor").value);
      const categoria = document.getElementById("categoria").value;


      const novaDespesa = { valor, categoria, descricao, data};

      let despesas = getDespesas();
      despesas.push(novaDespesa);
      salvarDespesas(despesas);

      alert("Despesa adicionada!");
      form.reset();
    });
  }
}


export function removerUltima() {
  if (despesas.length === 0) {
    alert("A lista de Despesa está vaiza, não há o que remover.");
    return;
  }
  despesas.pop();
  salvaProdutosLocalStorage();
  mostrarDespesas();
}

export function removerPrimeira() {
  if (despesas.length === 0) {
    alert("A lista está vazia, não há o que remover!");
    return;
  }

  despesas.shift();
  salvaProdutosLocalStorage();
  mostrarDespesas();
}

export function mostrarDespesas() {
  const listaDespesas = document.getElementById("#listaDespesas tbody");
  listaDespesas.innerHTML = ""; // limpa antes de renderizar de novo

  despesas.forEach((despesas) => {
    const linha = `<tr>
        <td>${despesas.categoria}</td>
        <td>${despesas.valorDespesa}</td>
        <td>${despesas.receita}</td>
        </tr>
    `;
    listaDespesas.innerHTML += linha;
  });

  calcularTotal();
}
