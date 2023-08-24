const imagem1 = document.getElementById('coxinha');
const imagem2 = document.getElementById('bolo');
const imagem3 = document.getElementById('pastel');
const carrinhoCompras = document.getElementById('menu');

const btnAdd1 = document.getElementById('add-coxinha');
const btnAdd2 = document.getElementById('add-bolo');
const btnAdd3 = document.getElementById('add-pastel');

btnAdd1.addEventListener('click', () => {
    addItemAoCarrinho('Coxinha', 2.5, imagem1.src);
});

btnAdd2.addEventListener('click', () => {
    addItemAoCarrinho('Bolo', 5.0, imagem2.src);
});

btnAdd3.addEventListener('click', () => {
    addItemAoCarrinho('Pastel', 3.0, imagem3.src);
});

function addItemAoCarrinho(itemNome, itemPreco, imagemSrc) {
    const item = document.createElement('li');
    const itemImagem = document.createElement('img');

    itemImagem.src = imagemSrc;
    itemImagem.alt = itemNome;
    itemImagem.width = 50; // Ajuste o tamanho da imagem conforme necessário

    item.innerHTML = `${itemNome} - R$ ${itemPreco.toFixed(2)}`;
    item.appendChild(itemImagem);
    carrinhoCompras.appendChild(item);
}

/* 

btnAdd2.addEventListener('click' , () => {
    let lista = document.createElement('li')
        lista.innerHTML = "o eu quero add"
        menu.append = (lista) 
})



btnAdd3.addEventListener('click' , () => {
    let lista = document.createElement('li')
        lista.innerHTML = "o eu quero add"
        menu.append = (lista) 
})



// remover algum item do carrinho
btnApagar1.addEventListener('click', () => {
    if (menu.firstChild) {
        menu.removeChild(menu.lastChild);
    }
});


btnApagar2.addEventListener('click', () => {
    if (menu.firstChild) {
        menu.removeChild(menu.lastChild);
    }
});


btnApagar3.addEventListener('click', () => {
    if (menu.firstChild) {
        menu.removeChild(menu.lastChild);
    }
}); */