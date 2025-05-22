document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');
    const scrollUpBtn = document.querySelector('.scroll-up-btn');
    const menu = document.querySelector('.navbar .menu');
    const menuBtn = document.querySelector('.menu-toggle');
    const menuBtnIcon = document.querySelector('.menu-toggle i');
    const menuLinks = document.querySelectorAll('.navbar .menu li a');

    window.addEventListener("scroll", function () {
        // Sticky navbar
        if (window.scrollY > 20) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }

        // Scroll-up button show/hide
        if (window.scrollY > 500) {
            scrollUpBtn.classList.add("show");
        } else {
            scrollUpBtn.classList.remove("show");
        }
        
    });

    // Slide-up script
    scrollUpBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'auto' });
        document.documentElement.style.scrollBehavior = "auto";
    });

    // Smooth scroll on menu item click
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            document.documentElement.style.scrollBehavior = "smooth";
            menu.classList.remove("active");
            menuBtnIcon.classList.remove("active");
        });
    });

    // Toggle menu/navbar script
    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("active");
        menuBtnIcon.classList.toggle("active");
    });

    
});
