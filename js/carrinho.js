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
    console.log("tamanho: " + tamanho + " quantidade: " + quantidadeItens)
}

remover.addEventListener('click', function(event) {
    event.preventDefault()
    removerItem()
    
})

function removerItem() {
    quantidadeItens--
    spanQuantidade.textContent = quantidadeItens
    tamanho = tamanhoSelect.value
    console.log("tamanho: " + tamanho + " quantidade: " + quantidadeItens)
}

