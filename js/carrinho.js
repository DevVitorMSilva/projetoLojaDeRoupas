let quantidadeItens = 0

var adicionar = document.getElementById('adicionar')
var remover = document.getElementById('remover')
var spanQuantidade = document.getElementById('spanQuantidade')

adicionar.addEventListener('click', function(event) {
    event.preventDefault()
    adicionarItem()
})

function adicionarItem(){
    quantidadeItens++
    console.log("quantidade de itens " + quantidadeItens)
    spanQuantidade.textContent = quantidadeItens
}

remover.addEventListener('click', function(event) {
    event.preventDefault()
    removerItem()
    
})

function removerItem() {
    quantidadeItens--
    spanQuantidade.textContent = quantidadeItens
}

