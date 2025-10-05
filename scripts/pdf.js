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