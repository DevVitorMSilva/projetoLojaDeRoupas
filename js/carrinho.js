let quantidadeItens = 0

var adicionar = document.getElementById('adicionar')
var remover = document.getElementById('remover')
var spanQuantidade = document.getElementById('spanQuantidade')

var tamanhoSelect = document.getElementById('tamanho')
var tamanho  

adicionar.addEventListener('click', function(event) {
    event.preventDefault()
    adicionarItem()
})

function adicionarItem(){
    quantidadeItens++
    spanQuantidade.textContent = quantidadeItens
    tamanho = tamanhoSelect.value
}

remover.addEventListener('click', function(event) {
    event.preventDefault()
    removerItem()
    
})

function removerItem() {
    if (quantidadeItens > 0) {
        quantidadeItens--
        spanQuantidade.textContent = quantidadeItens
        tamanho = tamanhoSelect.value
    }else {
        alert("número inválido")
    }
    
}

adicionarCarrinho = document.getElementById('adicionarCarrinho')

adicionarCarrinho.addEventListener('click', function(event) {
    event.preventDefault()
    window.localStorage.setItem("Tamanho", tamanho)
    window.localStorage.setItem("Quantidade", quantidadeItens)
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