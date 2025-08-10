# 📱 The Phone Paradise  

**The Phone Paradise** é um site fictício de e-commerce focado em smartphones e acessórios, desenvolvido com **HTML, CSS e JavaScript puro**, com funcionalidades de busca e filtragem dinâmica de produtos.  

---

## 🚀 Tecnologias Utilizadas  
- **HTML5** → Estrutura semântica e organizada para melhor acessibilidade e SEO.  
- **CSS3** → Estilização moderna, uso de variáveis CSS, layout responsivo e efeitos de interação.  
- **JavaScript** → Manipulação dinâmica do DOM, filtro de produtos em tempo real e gerenciamento de estado da categoria e pesquisa.  
- **Font Awesome** → Ícones para categorias e interface.  

---

## 📂 Estrutura do Projeto  

📦 the-phone-paradise

┣ 📂 imagens

┣ 📜 index.html

┣ 📜 style.css

┗ 📜 script.js


---

## 🎨 HTML & CSS – Destaques
- **Cabeçalho fixo** com logo, barra de pesquisa e ícone de busca.  
- **Menu de categorias** com botões interativos e ícones.  
- **Seção hero** com gradiente chamativo para promoções.  
- **Cards de produtos** estilizados com hover animado.  
- **Layout responsivo** usando `grid` e `flexbox`.  
- **Variáveis CSS (`:root`)** para cores e temas consistentes.  

---

## ⚡ JavaScript – Principais Funcionalidades  
O arquivo `script.js` contém toda a lógica de exibição e interação, incluindo:  

1. **Lista de produtos**  
   - Estruturada em um array de objetos, cada um contendo `id`, `nome`, `categoria`, `preco`, `precoOriginal`, `desconto`, `imagem` e `descricao`.  
   - Facilita a manutenção e escalabilidade do catálogo.  

2. **Filtragem por categoria**  
   - Uso do método `.filter()` para gerar um novo array com base na categoria selecionada.  
   - Alteração dinâmica de classes (`active`) para indicar a categoria atual.  

3. **Busca em tempo real**  
   - Evento `input` no campo de busca para filtrar produtos conforme o usuário digita.  
   - Busca feita de forma **case-insensitive** (`toLowerCase()`).  

4. **Renderização dinâmica**  
   - A função `mostrarProdutos()` monta o HTML dos produtos filtrados usando **template literals** e insere no DOM com `innerHTML`.  

5. **Eventos globais**  
   - `DOMContentLoaded` garante que o script só execute após o carregamento do HTML.  
   - Adição de listeners para botões de categoria e campo de busca.  

---

## 👨‍💻 Autor  
**Diogo Antonelli**  
- <a href="https://www.linkedin.com/in/diogo-antonelli-71351a213/">Linkedin</a>
