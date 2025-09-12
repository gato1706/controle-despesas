let despesa = []

function addDespesa(){

    let valor = parseFloat(document.getElementById('valorDespesa').value)
    let categoria = document.getElementById('categoria').value
    
    if (valor <= 0){
        throw new Error('Valor da despesa deve ser maior que 0')
    }

    const novaDespesa = {
        valor: valor,
        categoria: categoria
    }

    despesa.push(novaDespesa)
    console.log(despesa)
}

function exibirDespesa(){
    // continuar depois
}