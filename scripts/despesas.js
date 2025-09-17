let despesa = []



document.addEventListener('DOMContentLoaded', function() {
    // 2. Carrega os produtos do Local Storage
    function carregaProdutosLocalStorage() {
        despesa = JSON.parse(localStorage.getItem('despesa')) || [];
        
    }
    carregaProdutosLocalStorage()
})


    export function addDespesa(){

    let valor = parseFloat(document.getElementById('valorDespesa').value)
    let categoria = document.getElementById('categoria').value
    
    if (valor <= 0){
        throw new Error('Valor da despesa deve ser maior que 0')
    }

    const novaDespesa = {
        valor,
        categoria
    }

    despesa.push(novaDespesa)

    localStorage.setItem("despesa",JSON.stringify(despesa))

}

 export function mostrarDespesas(){
      const lista = document.getElementById("listaDespesas");
      lista.innerHTML = ""; // limpa antes de renderizar de novo

      despesa.forEach((despesa) => {
        let item = document.createElement("li");
        item.textContent = `R$ ${despesa.valor} - ${despesa.categoria}`;
        lista.appendChild(item);
      })}