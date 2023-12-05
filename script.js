window.onload = function() {
    var projectContainers = document.querySelectorAll('#projects .details-container');

    // Enregistrez les tailles d'origine des éléments
    var originalSizes = [];
    projectContainers.forEach(function (container) {
        originalSizes.push({
            container: container,
            transform: getComputedStyle(container).transform
        });
    });

    // Fonction pour faire grandir les éléments
    function enlargeElements() {
        projectContainers.forEach(function (container) {
            container.style.transition = 'transform 1s';
            container.style.transform = 'scale(2)';
        });
    }

    // Fonction pour rétablir les éléments à leur taille d'origine
    function resetElements() {
        projectContainers.forEach(function (container, index) {
            var originalSize = originalSizes[index];
            container.style.transition = 'transform 1s';
            container.style.transform = originalSize.transform;
        });
    }

    // Gérez l'événement de défilement de la page
    window.addEventListener('scroll', function () {
        var rect = document.getElementById('projects').getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
            // The "Projects" section is in view
            enlargeElements();
        } else {
            resetElements();
        }
    });
    window.addEventListener("scroll", function() {
        var backToTopButton = document.querySelector(".back-to-top");
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    document.getElementById("myButton").addEventListener("click", function() {
        // Trouvez l'élément de destination
        var destination = document.getElementById("jeuu");

        // Faites défiler jusqu'à l'élément de destination
        destination.scrollIntoView({ behavior: "smooth" });

        // Affichez l'élément de destination avec une transition
        destination.style.marginTop = "0";
        destination.style.opacity = "1";
    });

    document.addEventListener('DOMContentLoaded', function () {
        gsap.from(".container .scroll-animation", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    
        // Animation de survol pour les compétences
        gsap.from("#experience .article-container article", { opacity: 0, x: -50, stagger: 0.2, duration: 0.8, delay: 1 });
    
        // Animation de survol pour les projets
        gsap.from("#projects .details-container", { opacity: 0, y: 30, stagger: 0.2, duration: 1, delay: 1.5 });
    
        gsap.from('.logo', { opacity: 0, duration: 1, delay: 0.5, y: -30, ease: 'power2.out' });
        gsap.from('.nav-list li', { opacity: 0, duration: 1, delay: 0.8, stagger: 0.2, ease: 'power2.out' });
    
        document.addEventListener("scroll", function () {
            const elements = document.querySelectorAll(".scroll-animation");
    
            elements.forEach(element => {
                if (isElementInViewport(element)) {
                    gsap.to(element, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });
                }
            });
        });
    });
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    

};