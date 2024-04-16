function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../assets/menu-aberto.png"
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../assets/marca-cruzada.png"
    }   
}
