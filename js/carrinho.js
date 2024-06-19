let quantidadeItens = 0

var adicionar = document.getElementById('adicionar')
var remover = document.getElementById('remover')
var quantidade = document.getElementById('spanQuantidade')
var item = document.getElementById('item')
var precoElement = document.getElementById('preco')
var tamanhoSelect = document.getElementById('tamanho')


adicionar.addEventListener('click', function (event) {
    event.preventDefault()
    adicionarItem()
})

function adicionarItem() {
    quantidadeItens++
    quantidade.textContent = quantidadeItens
    tamanho = tamanhoSelect.value
}

remover.addEventListener('click', function (event) {
    event.preventDefault()
    removerItem()

})

function removerItem() {
    if (quantidadeItens > 0) {
        quantidadeItens--
        quantidade.textContent = quantidadeItens
        tamanho = tamanhoSelect.value
    } else {
        alert("número inválido")
    }

}

adicionarCarrinho = document.getElementById('adicionarCarrinho')

adicionarCarrinho.addEventListener('click', function (event) {
    event.preventDefault()

    let itemInfo = {
        item: item.textContent,
        tamanho: tamanhoSelect.value,
        quantidade: quantidadeItens,
        preco: precoElement.textContent
    }
    localStorage.setItem("ItemInfo", JSON.stringify(itemInfo))


})

window.addEventListener('load', function () {
    let itemInfo = JSON.parse(this.localStorage.getItem("ItemInfo"))
    if (itemInfo) {
        let divItem = this.document.createElement('div')
        divItem.classList.add('itensCarrinho')

        let nomeItem = document.createElement('p')
        nomeItem.classList.add('nomeItemCarrinho', 'produtoCarrinho')
        nomeItem.textContent = itemInfo.item

        let quantidadeItem = document.createElement('p')
        quantidadeItem.classList.add('quantidadeItemcarrinho', 'produtoCarrinho')
        quantidadeItem.textContent = itemInfo.quantidade + 'x'
        
        let precoItem = document.createElement('p')
            precoItem.classList.add('precoItemCarrinho', 'produtoCarrinho')
            precoItem.textContent = itemInfo.preco

        divItem.appendChild(nomeItem)
        divItem.appendChild(quantidadeItem)
        divItem.appendChild(precoItem)

        let itensCarrinho = document.querySelector('.itensCarrinho')
        let ultimoItem = itensCarrinho.lastElementChild
        itensCarrinho.insertBefore(divItem, ultimoItem.nextSibling)
    }
})


//ABRIR POP-UP CARRINHO
const active = document.getElementById("active")
const inactive = document.getElementById("inactive")
const container = document.getElementById("container")

active.addEventListener("click", () => {
    container.classList.add("active")
})

inactive.addEventListener("click", () => {
    container.classList.remove("active")
})