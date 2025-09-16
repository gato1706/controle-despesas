/**
 * @author Gabriel Monteiro Silva <gabrielmontsilva16@gmail.com>
 * @author Vitor Cruz de Lima <>
 * @author Thigo Gato <>
 * @version 1.0.0
 * @since 1.0.0 (10/09/2025)
 * @param {number} receita - Receita(Valor "ganho") mensal
 * @param {number} despesas  - Despesas(valor investido/"perdido") mensal
 * @returns {number} O valor do saldo final
 * 
 * @example
 * // Calculo do saldo do mês de setembro:
 * Saldo = receita - despesas
 * Saldo = 1500 - 975
 * Saldo mensal positivo de = R$525,00
 * (valores imaginários)
 */

export function calcularSaldo(receita, despesas){
    //validações
    let saldo = receita - despesas
    return saldo
}

export function classificarSaldo(saldo){
    //Validação para garantir que o saldo seja um número
    //IsNaN - Is Not a Number
    // !== diferente de número
    if(typeof saldo!== 'number' || isNaN(saldo)){
        throw new Error('O valor do saldo deve ser um número !')
    }
    switch(true){
        case saldo > 0:
            return {texto: 'O saldo mensal foi positivo', 
                    classe: 'saldo-positivo'} //classe CSS

        case saldo = 0:
            return{ texto: 'O saldo mensal não teve alterações',
                    classe: 'saldo-neutro'}
            
        case saldo < 0:
            return{ texto: 'O saldo mensal foi negativo',
                    classe: 'saldo-negativo'}
    }
}