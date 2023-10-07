let currentIndexProduto1 = 0;
let currentIndexProduto2 = 0;

function atualizarImagem(produtoId) {
    let imagens = document.querySelectorAll(`#${produtoId}-imagens img`);
    imagens.forEach((imagem, index) => {
        if (index === currentIndexProduto1 && produtoId === 'produto1') {
            imagem.style.display = 'block';
        } else if (index === currentIndexProduto2 && produtoId === 'produto2') {
            imagem.style.display = 'block';
        } else {
            imagem.style.display = 'none';
        }
    });
}

function anteriorImagem(produtoId) {
    if (produtoId === 'produto1') {
        currentIndexProduto1 = (currentIndexProduto1 - 1 + 3) % 3;
        atualizarImagem('produto1');
    } else if (produtoId === 'produto2') {
        currentIndexProduto2 = (currentIndexProduto2 - 1 + 3) % 3;
        atualizarImagem('produto2');
    }
}

function proximoImagem(produtoId) {
    if (produtoId === 'produto1') {
        currentIndexProduto1 = (currentIndexProduto1 + 1) % 3;
        atualizarImagem('produto1');
    } else if (produtoId === 'produto2') {
        currentIndexProduto2 = (currentIndexProduto2 + 1) % 3;
        atualizarImagem('produto2');
    }
}


function proximoImagem(produto) {
    if (produto === 'produto1') {
        imagemAtualProduto1 = (imagemAtualProduto1 + 1) % 3;
        mostrarImagemAtual('produto1', imagemAtualProduto1);
    } else if (produto === 'produto2') {
        imagemAtualProduto2 = (imagemAtualProduto2 + 1) % 3;
        mostrarImagemAtual('produto2', imagemAtualProduto2);
    }
}

function pesquisar() {
    const termoPesquisa = document.getElementById('barraPesquisa').value.toLowerCase();
    const produtosEncontrados = [];

    for (const produto of produtos) {
        if (produto.nome.toLowerCase().includes(termoPesquisa)) {
            produtosEncontrados.push(produto);
        }
    }

    console.log('Produtos encontrados:', produtosEncontrados);
}
