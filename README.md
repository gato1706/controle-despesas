# 💰 Simulador de Orçamento Familiar

Projeto em **HTML, CSS e JavaScript** para simulação de orçamento mensal.  
O usuário poderá cadastrar receitas e despesas por categoria e gerar relatórios com saldo, alertas de limite e gráfico de distribuição.

---

## 🚀 Objetivo
O sistema tem como finalidade auxiliar no **controle financeiro familiar**, permitindo:
- Adicionar receitas e despesas.
- Calcular saldo mensal.
- Filtrar despesas por categoria.
- Exibir relatório consolidado.
- Emitir alertas de limite.
- Visualizar gráfico de distribuição dos gastos.


---

## 📂 Estrutura sugerida de diretórios

```bash
/simulador-orcamento
│── index.html              # Página principal do projeto
│── style.css               # Estilos globais
│
├── /js                     # Pasta para scripts JavaScript organizados
│   ├── despesas.js         # Funções relacionadas a despesas
│   ├── receitas.js         # Funções relacionadas a receitas
│   ├── relatorio.js        # Cálculo e exibição do relatório mensal
│   └── grafico.js          # Configuração e atualização do gráfico
│
├── /assets                 # Recursos estáticos
│   ├── img/                # Ícones e imagens
└── 
```

---

## ✅ Funcionalidades principais
- [ ] **Layout inicial em HTML** com formulários para receitas e despesas.  
- [ ] **Estilização com CSS** (cores para receitas, despesas e saldo).  
- [ ] **Adicionar despesas** (categoria + valor).  
- [ ] **Adicionar receitas** (valor mensal).  
- [ ] **Calcular saldo** (receitas - despesas).  
- [ ] **Filtrar despesas por categoria** e mostrar subtotal.  
- [ ] **Gerar relatório mensal** (receitas totais, despesas totais, saldo final).  
- [ ] **Emitir alerta de limite** se despesas ≥ receitas.  
- [ ] **Gerar gráfico de distribuição** das despesas por categoria (pizza ou barras).  
- [ ] **Refatorar em módulos JS** (`despesas.js`, `receitas.js`, etc.).  

---

## 🧩 Tarefas detalhadas

### 📌 Estrutura e Interface
- [ ] Criar formulário com inputs: **receita mensal, categoria de despesa, valor**.  
- [ ] Criar botões **Adicionar Receita** e **Adicionar Despesa**.  
- [ ] Criar área para **relatório mensal** e **gráfico**.  
- [ ] Tornar layout **responsivo** usando Flexbox ou Grid.  

### 📌 Funcionalidades
- [ ] Função `adicionarDespesa()` → capturar valores, validar, salvar no array e atualizar lista.  
- [ ] Função `adicionarReceita()` → capturar valor, validar e salvar no array.  
- [ ] Função `calcularSaldo()` → somar receitas - despesas e exibir saldo.  

### 📌 Relatórios e Filtros
- [ ] Criar filtro por categoria → exibir apenas despesas daquela categoria.  
- [ ] Relatório consolidado → receitas totais, despesas totais e saldo.  
- [ ] Alerta se despesas > receitas → destacar saldo em vermelho.  
 

### 📌 Refatoração
- [ ] Separar lógicas em módulos:  
  - `despesas.js` → funções de despesas.  
  - `receitas.js` → funções de receitas.  
  - `relatorio.js` → cálculo e exibição de relatório.  
  - `grafico.js` → geração e atualização do gráfico.  




