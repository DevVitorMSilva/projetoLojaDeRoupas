const imagensMenores = document.querySelectorAll('.imagem-menor')

imagensMenores.forEach(imagem => {
    imagem.addEventListener('click', () => {
        const novaSrc = imagem.getAttribute('src')

        const imagemPrincipal = document.querySelector('.imagemPrincipal')

        const srcAtual = imagemPrincipal.getAttribute('src')

        imagemPrincipal.setAttribute('src', novaSrc)

        imagem.setAttribute('src', srcAtual)
        
    })
});