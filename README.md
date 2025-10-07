# 💰 Controle de Despesas

Um projeto simples e funcional para controle de despesas mensais, desenvolvido com **HTML, CSS e JavaScript puro**. A aplicação permite que o usuário cadastre sua receita mensal e suas despesas, visualizando um relatório consolidado e uma lista detalhada de gastos.

O projeto estará disponivel no GitPages: [https://gato1706.github.io/controle-despesas/despesas.html](https://gato1706.github.io/controle-despesas/index.html)

---

## 🚀 Funcionalidades Implementadas

O sistema oferece uma experiência intuitiva para o gerenciamento financeiro, com as seguintes funcionalidades:

- ✅ **Cadastro de Despesas**: Formulário para adicionar despesas com valor, categoria, data e uma descrição opcional.
- ✅ **Armazenamento Local**: Os dados são salvos no `localStorage` do navegador, garantindo que as informações não sejam perdidas ao fechar a página.
- ✅ **Relatório Mensal**: Um card de relatório exibe o total de receitas, o total de despesas e o saldo final do mês.
- ✅ **Listagem Detalhada**: Uma tabela exibe todas as despesas cadastradas, incluindo um **saldo progressivo** que mostra o valor restante após cada transação.
- ✅ **Filtro por Categoria**: É possível filtrar a lista de despesas para visualizar apenas os gastos de uma categoria específica.

---

## 🛠️ Tecnologias Utilizadas

*   **HTML5**: Para a estruturação das páginas de cadastro e listagem.
*   **CSS3**: Para a estilização completa da aplicação, incluindo o layout responsivo.
*   **JavaScript (ES6+)**: Para toda a lógica de manipulação de dados, cálculos, interatividade e armazenamento local.

---

## 📂 Estrutura do Projeto

O código está organizado da seguinte forma:

```
/controle-despesas
│
├── index.html              # Página de cadastro de despesas.
├── despesas.html           # Página de listagem e relatório.
│
├── /styles
│   └── index.css           # Folha de estilos principal.
│
└── /scripts
    ├── main.js             # Ponto de entrada, gerencia os eventos.
    ├── adicionarDespesa.js # Lógica para adicionar e salvar despesas.
    ├── listar.js           # Lógica para listar, calcular e filtrar despesas.
    └── storage.js          # Funções para interagir com o localStorage.
```

---

## 🚀 Como Executar

Como este é um projeto front-end puro, não há necessidade de um servidor ou de instalação de dependências.

1.  **Clone o repositório** para a sua máquina local:
    ```bash
    git clone <URL_DO_REPOSITORIO>
    ```
2.  **Abra o arquivo `index.html`** no seu navegador de preferência para começar a adicionar despesas.
3.  Clique no botão **"Ver lista de despesas"** para navegar até a página de relatórios.

---

## 🔮 Próximos Passos (Sugestões)

- **Edição e Exclusão**: Implementar botões para editar ou remover uma despesa individualmente.
- **Gráficos**: Adicionar um gráfico (pizza ou barras) para visualizar a distribuição de gastos por categoria.
- **Alertas Visuais**: Mudar a cor do saldo final no relatório para vermelho quando ele for negativo.
- **Ordenação**: Permitir que o usuário ordene a tabela por data ou valor.
