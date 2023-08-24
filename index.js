const imagem1 = document.getElementById('idimagem1')
const imagem2 = document.getElementById('idimagem1')
const imagem3 = document.getElementById('idimagem1')
const menu = document.getElementById('iddaul')

const btnAdd1 = document.getElementById('iditem2')
const btnAdd2 = document.getElementById('iditem2')
const btnAdd3 = document.getElementById('iditem2')

// adicionar algum item ao carrinho



class adicionarItem1 {
    constructor(nomeItem, valorItem){
        this.nomeItem = nomeItem
        this.valorItem = valorItem
    }
    
}



btnAdd1.addEventListener('click' , () => {
    let lista = document.createElement('li')
        lista.innerHTML = "o eu quero add"
        menu.append = (lista) 
})


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
});