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

    

    // testimonials carousel
    const slidesContainer = document.querySelector(".slides");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = 0;
    let slidesToShow = getSlidesToShow();
    let slideWidth = 0;
    let autoplayInterval;

    // Function to determine how many slides to show
    function getSlidesToShow() {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 690) return 1; // Mobile
        if (windowWidth <= 1045) return 2; // Tablet
        return 3; // Desktop
    }

    // Update the position of the slides
    function updateSlider() {
        slidesToShow = getSlidesToShow();
        slideWidth = slidesContainer.offsetWidth / slidesToShow;
        
        // Adjusts the width of the slides
        slides.forEach(slide => {
            slide.style.minWidth = `${slideWidth}px`;
        });
        
        goToSlide(currentIndex);
    }

    // Navigate to a specific slide
    function goToSlide(index) {
        const maxIndex = slides.length - slidesToShow;
        
        // Limit the index
        if (index > maxIndex) index = maxIndex;
        if (index < 0) index = 0;
        
        currentIndex = index;
        slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Go to the next slide
    function nextSlide() {
        const maxIndex = slides.length - slidesToShow;
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        goToSlide(currentIndex);
    }

    // Go back to the previous slide
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - slidesToShow;
        }
        goToSlide(currentIndex);
    }

    // Set up the autoplay
    function setupAutoplay() {
        clearInterval(autoplayInterval);
        autoplayInterval = setInterval(nextSlide, 5000);
    }

    // Event listeners
    nextBtn.addEventListener("click", () => {
        nextSlide();
        setupAutoplay();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        setupAutoplay();
    });

    // Updates when the window is resized
    window.addEventListener("resize", () => {
        updateSlider();
    });

    // Initialization
    updateSlider();
    setupAutoplay();




    // Animation when scrolling to elements with the class .reveal.
    function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal-left, .reveal-right");

    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementBottom = reveal.getBoundingClientRect().bottom;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint && elementBottom > 0) {
            reveal.classList.add("active");
        } else {
            reveal.classList.remove("active");
        }
    });
}

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);
});

