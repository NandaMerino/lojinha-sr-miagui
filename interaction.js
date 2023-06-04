let ITENS_LOJA = [
    {
        nome:"Bola da Copa",
        preco:86.30,
        url_img:"./img/bola_copa.webp",
        descricao:"Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome:"Carrinho da Hot Wheels",
        preco:5.80,
        url_img:"./img/carro_hotwheels.jpeg",
        descricao:"Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome:"Chinelo",
        preco:19.99,
        url_img:"./img/chinelo.webp",
        descricao:"Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome:"Escorredor de Louça",
        preco:15.20,
        url_img:"./img/escorredor_louca.webp",
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome:"Espada Medieval",
        preco:200.18,
        url_img:"./img/espada_medieval.png",
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome:"Guitarra",
        preco:1980.99,
        url_img:"./img/guitarra.webp",
        descricao:"Otima para utilizar em bandas de hard rock"
    },
    {
        nome:"Toalha de Banho",
        preco:9.99,
        url_img:"./img/toalha_banho.webp",
        descricao:"Boa para se secar apos o banho"
    },
    {
        nome:"Vinho",
        preco:59.90,
        url_img:"./img/vinho.webp",
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas "
    }
]

function mostrarProdutos() {
    let itensSection = document.getElementById("itens_section");

    for (let i = 0; i < ITENS_LOJA.length; i++) {
        let produtoDiv = document.createElement("div");
        produtoDiv.className = "produto";
        produtoDiv.dataset.index = i;

        let imageDiv = document.createElement("div");
        imageDiv.className = "product-image";

        let url_imgProduto = document.createElement("img");
        url_imgProduto.src = ITENS_LOJA[i].url_img;

        let textDiv = document.createElement("div");
        textDiv.className = "text";

        let nomeProduto = document.createElement("h3");
        nomeProduto.textContent = ITENS_LOJA[i].nome;

        let precoProduto = document.createElement("p");
        precoProduto.textContent = "R$ " + ITENS_LOJA[i].preco.toFixed(2);
        precoProduto.className = "precoProdutoClasse";

        let descricaoProduto = document.createElement("p");
        descricaoProduto.textContent = ITENS_LOJA[i].descricao;

        produtoDiv.appendChild(imageDiv);
        imageDiv.appendChild(url_imgProduto);
        produtoDiv.appendChild(textDiv);
        textDiv.appendChild(nomeProduto);
        textDiv.appendChild(precoProduto);
        textDiv.appendChild(descricaoProduto);
        itensSection.appendChild(produtoDiv);

        produtoDiv.addEventListener("click", function (event) {
            let index = parseInt(event.currentTarget.dataset.index);
            ITENS_LOJA.splice(index, 1);
            atualizarListaProdutos();
        });
    }
}

function cadastrarItem() {
    
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let preco = parseFloat(document.getElementById("preco").value);
    let url_img = document.getElementById("url_img").value;
    let descricao = document.getElementById("descricao").value;

    let novoItem = {
        nome: nome,
        preco: preco,
        url_img: url_img,
        descricao: descricao
    };

    ITENS_LOJA.push(novoItem);
    atualizarListaProdutos();

    document.getElementById("nome").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("url_img").value = "";
    document.getElementById("descricao").value = "";
}

function atualizarListaProdutos() {
    let itensSection = document.getElementById("itens_section");
    itensSection.innerHTML = "";
    mostrarProdutos();
}

let textCadastro = document.createElement("h2");
textCadastro.textContent = "Cadastro de Produtos";

let formularioSection = document.createElement("section");
formularioSection.id = "formulario_section";

let cadastroForm = document.createElement("form");
cadastroForm.id = "cadastro_form";

let nomeLabel = document.createElement("label");
nomeLabel.textContent = "Nome";

let nomeInput = document.createElement("input");
nomeInput.type = "text";
nomeInput.id = "nome";

let precoLabel = document.createElement("label");
precoLabel.textContent = "Valor";

let precoInput = document.createElement("input");
precoInput.type = "number";
precoInput.id = "preco";

let urlImgLabel = document.createElement("label");
urlImgLabel.textContent = "Imagem do produto";

let urlImgInput = document.createElement("input");
urlImgInput.type = "text";
urlImgInput.id = "url_img";

let descricaoLabel = document.createElement("label");
descricaoLabel.textContent = "Descrição";

let descricaoInput = document.createElement("input");
descricaoInput.type = "text";
descricaoInput.id = "descricao";

let cadastrarButton = document.createElement("button");
cadastrarButton.textContent = "Cadastrar";

cadastroForm.addEventListener("submit", cadastrarItem);

let itensSection = document.createElement("section");
itensSection.id = "itens_section";

cadastroForm.appendChild(textCadastro);
cadastroForm.appendChild(nomeLabel);
cadastroForm.appendChild(nomeInput);
cadastroForm.appendChild(precoLabel);
cadastroForm.appendChild(precoInput);
cadastroForm.appendChild(urlImgLabel);
cadastroForm.appendChild(urlImgInput);
cadastroForm.appendChild(descricaoLabel);
cadastroForm.appendChild(descricaoInput);
cadastroForm.appendChild(cadastrarButton);
formularioSection.appendChild(cadastroForm);


document.body.appendChild(formularioSection);

mostrarProdutos();
