import { calcularSaldo, classificarSaldo } from "./calculoSaldo"

const form = document.getElementById('formIMC')
const resultado = document.getElementById('resultado')

//listener no submit do from
form.addEventListener(' submit', (e) => {
    e.preventDefault() //evita o recarregamennto do form
    const receita = document.getElementById('receita').value
    const despesas = document.getElementById('despesas').value
    try {
        const saldo = calcularSaldo(receita, despesas)
        //desestruturação de objeto - object desustrucuting
        const {texto, classe} = classificarSaldo(saldo)
        resultado.textContent  = `SALDO: ${saldo.toFixed(2)} - ${texto}`
        resultado.className = classe
        
    } catch {
        resultado.textContent = `❌Erro: ${error.message}`
        resultado.className = 'resultado-erro'
    }
})

form.addEventListener('reset', () =>{
    //limpando o conteúdo do resultado
    resultado.textContent = ''
    resultado.className = ''
})