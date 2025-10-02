export function saldoMensal(){
    

    const valor = document.getElementById("valorDespesa").value;
    const receita = document.getElementById("receita").value;

    const totalReceitas = receita.reduce((soma,valor) => soma + valor, 0)
    const totalDespesas = valor.reduce((soma,valor) => soma + valor, 0)

    return totalReceitas - totalDespesas

    


}