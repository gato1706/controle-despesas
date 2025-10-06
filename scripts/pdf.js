/**
 * @author Gabriel Monteiro <gabrielmontsilva16@gmail.com>
 * @author Vitor Cruz <provitor39@gmail.com>
 * @author Thiago Gato <thiago.gato17g@gmail.com>
 * @version 1.0.0
 * @since 1.0.0 (05/10/2025)
 * 
 * @file exportarPDF.js
 * @description
 * Este módulo é responsável por gerar e exportar o relatório de despesas em formato PDF.
 * 
 * Ao clicar no botão com o ID `#btnExportar`, o conteúdo do elemento `#pdf-content`
 * é capturado e convertido em um arquivo PDF utilizando a biblioteca **html2pdf.js**.
 *
 * O arquivo gerado é salvo automaticamente no dispositivo do usuário.
 *
 * @requires html2pdf.js
 *
 * @example
 * // Estrutura HTML esperada:
 * // <div id="pdf-content">
 * //   <!-- conteúdo do relatório -->
 * // </div>
 * // <button id="btnExportar">Exportar PDF</button>
 *
 * // Ao clicar no botão, o relatório será baixado como "relatorio_despesas.pdf" exportando o relatório mensal das despesas, caso o usuário queira de forma física.
 */
const btnGenerate = document.querySelector("#btnExportar");
btnGenerate.addEventListener("click", () => {
    const content = document.querySelector("#pdf-content");

    const options = {
        margin: 1,
        filename: 'relatorio_despesas.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(content).save();
})