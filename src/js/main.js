{
    const NAV = {
        button: document.querySelector('.navbar__hamburger'),
        navbar: document.querySelector('.navbar'),
    }
    NAV.button.addEventListener('click', function () {
        this.classList.toggle('navbar__hamburger--open');
        NAV.navbar.classList.toggle('navbar--open');
    })

    window.addEventListener('resize', () => {
        NAV.button.classList.remove('navbar__hamburger--open');
        NAV.navbar.classList.remove('navbar--open');
    })
}