let produtos = [
    {
        id: 1,
        nome: "iPhone 16",
        categoria: "iphone",
        preco: 5205,
        precoOriginal: 5849,
        desconto: 11,
        imagem: "imagens/iphone16novo.png",
        descricao: "Smartphone Apple de Última Geração"
    },
    {
        id: 2,
        nome: "Iphone 15",
        categoria: "iphone",
        preco: 3752,
        precoOriginal: 4576,
        desconto: 18,
        imagem: "imagens/iphone15novo.png",
        descricao: "Smartphone Apple com chip A16 Bionic"
    },
    {
        id: 3,
        nome: "Iphone 14",
        categoria: "iphone",
        preco: 3319,
        precoOriginal: 3999,
        desconto: 17,
        imagem: "imagens/iphone14novo.png",
        descricao: "Smartphone Apple com câmera dupla"
    },
    {
        id: 4,
        nome: "Iphone 13",
        categoria: "iphone",
        preco: 2215,
        precoOriginal: 2546,
        desconto: 13,
        imagem: "imagens/iphone13novo.png",
        descricao: "Smartphone Apple com chip A15 Bionic"
    },
    {
        id: 5,
        nome: "Iphone 12",
        categoria: "iphone",
        preco: 1827,
        precoOriginal: 2100,
        desconto: 13,
        imagem: "imagens/iphone12novo.png",
        descricao: "Smartphone Apple com tela Super Retina XDR"
    },
    {
        id: 6,
        nome: "Samsung Galaxy S24",
        categoria: "samsung",
        preco: 4870,
        precoOriginal: 5414,
        desconto: 10,
        imagem: "imagens/galaxys24novo.png",
        descricao: "Smartphone Samsung com câmera de 200MP"
    },
    {
        id: 7,
        nome: "Samsung Galaxy S23 FE",
        categoria: "samsung",
        preco: 2158,
        precoOriginal: 2600,
        desconto: 17,
        imagem: "imagens/galaxys23fenovo.png",
        descricao: "Smartphone Samsung com tela AMOLED de 6.4 polegadas"
    },
    {
        id: 8,
        nome: "Samsung Galaxy S22",
        categoria: "samsung",
        preco: 2125,
        precoOriginal: 2500,
        desconto: 15,
        imagem: "imagens/galaxys22novo.png",
        descricao: "Smartphone Samsung com chip Exynos 2200"
    },
    {
        id: 9,
        nome: "Xiaomi Redmi Note 14 Pro",
        categoria: "xiaomi",
        preco: 1649,
        precoOriginal: 1940,
        desconto: 15,
        imagem: "imagens/redminote14pronovo.png",
        descricao: "Smartphone Xiaomi com câmera de 200MP"
    },
    {
        id: 10,
        nome: "Xiaomi Redmi Note 13",
        categoria: "xiaomi",
        preco: 1066,
        precoOriginal: 1300,
        desconto: 18,
        imagem: "imagens/redminote13novo.png",
        descricao: "Smartphone Xiaomi com tela AMOLED de 6.67 polegadas"
    },
    {
        id: 11,
        nome: "Xiaomi Redmi Note 12",
        categoria: "xiaomi",
        preco: 855,
        precoOriginal: 950,
        desconto: 10,
        imagem: "imagens/redminote12novo.png",
        descricao: "Smartphone Xiaomi com bateria de 5000mAh"
    },
    {
        id: 12,
        nome: "Apple Airpods Max",
        categoria: "acessorios",
        preco: 4080,
        precoOriginal: 4800,
        desconto: 15,
        imagem: "imagens/airpodsmaxnovo.png",
        descricao: "Fones de ouvido Apple com cancelamento de ruído ativo"
    },
    {
        id: 13,
        nome: "Apple Airpods Pro 2",
        categoria: "acessorios",
        preco: 1520,
        precoOriginal: 1900,
        desconto: 20,
        imagem: "imagens/airpodspro2novo.png",
        descricao: "Fones de ouvido Apple com chip H2 e cancelamento de ruído ativo"
    }
];

let textoPesquisa = "";
let = categoriaAtual = "all";

let produtosContainer = document.querySelector('.products-container');
let input = document.querySelector('.search-input');
let todosBotoes = document.querySelectorAll('.category-btn');

function mostrarProdutos() {
    let htmlProdutos = ""

    let produtosFiltrados = produtos.filter(prd => {

        let passouCategoria = (categoriaAtual === "all" || prd.categoria === categoriaAtual)

        let passouPesquisa = prd.nome.toLowerCase().includes(textoPesquisa.toLowerCase())

        return passouPesquisa && passouCategoria;
    })


    produtosFiltrados.forEach(produto => {
        htmlProdutos = htmlProdutos +`
        <div class="product-card">
            <img src="${produto.imagem}" class="product-img" alt="${produto.nome}">
            <div class="product-info">
                <h3 class="product-name">${produto.nome}</h3>
                <p class="product-description">${produto.descricao}</p>
                <p class="product-price">R$ ${produto.preco}</p>
                <button class="product-button">Ver Detalhes</button>
            </div>
        </div>
        `
    })

    produtosContainer.innerHTML = htmlProdutos;
}

function pesquisar() {
    textoPesquisa = input.value

    mostrarProdutos()
}

function trocarCategoria(categoria) {
    categoriaAtual = categoria

    todosBotoes.forEach(botao => {
        botao.classList.remove('active');

        if (botao.getAttribute('data-category') === categoria) {
            botao.classList.add('active');
        }
    })
    mostrarProdutos();
}

window.addEventListener('DOMContentLoaded', () => {

    //Mostrar todos os Produtos
    mostrarProdutos();

    //Adiciona Ouvintes de Evento no Input
    input.addEventListener('input', pesquisar);

    //Adiciona Ouvintes de Evento nos Botões de Categoria
    todosBotoes.forEach(botao => {
        botao.addEventListener('click', () => {
            let categoria = botao.getAttribute('data-category');
            
            trocarCategoria(categoria);
        })
    })
}) 

/* 
filter -> Array original [produto1, produto2, produto3]
Novo Array com os itens filtrados

true / false
Se for true, o item é mantido no novo array
Se for false, o item é removido do novo array
*/
