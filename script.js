window.onload = function () {
    var projectSection = document.getElementById('projects');
    var projectTitle = projectSection.querySelector('.title');
    var projectContainers = projectSection.querySelectorAll('.details-container');

    // Enregistrez les tailles d'origine des éléments
    var originalTitleSize = {
        title: projectTitle,
        transform: getComputedStyle(projectTitle).transform
    };

    var originalSizes = [];
    projectContainers.forEach(function (container) {
        originalSizes.push({
            container: container,
            transform: getComputedStyle(container).transform
        });
    });

    // Fonction pour faire grandir les éléments
    function enlargeElements() {
        projectTitle.style.transition = 'transform 1.5s';
        projectTitle.style.transform = 'scale(1.5)';

        projectContainers.forEach(function (container) {
            container.style.transition = 'transform 1.5s';
            container.style.transform = 'scale(1.5)';
        });
    }

    // Fonction pour rétablir les éléments à leur taille d'origine
    function resetElements() {
        projectTitle.style.transition = 'transform 1s';
        projectTitle.style.transform = originalTitleSize.transform;

        projectContainers.forEach(function (container, index) {
            var originalSize = originalSizes[index];
            container.style.transition = 'transform 1s';
            container.style.transform = originalSize.transform;
        });
    }

    // Gérez l'événement de défilement de la page
    window.addEventListener('scroll', function () {
        var rect = projectSection.getBoundingClientRect();

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
};

document.addEventListener('DOMContentLoaded', function () {
    // Initialisez la variable pour vérifier si l'animation a déjà été déclenchée
    let experienceAnimated = false;

    gsap.from(".container .scroll-animation", { opacity: 0, y: 50, duration: 1, delay: 0.5 });

    // Animation de survol pour les compétences
    gsap.from("#experience .article-container article", { opacity: 0, x: -50, stagger: 0.2, duration: 0.8, delay: 1 });

    // Animation de survol pour les projets
    gsap.from("#projects .details-container", { opacity: 0, y: 30, stagger: 0.2, duration: 1, delay: 1.5 });

    gsap.from('.logo', { opacity: 0, duration: 1, delay: 0.5, y: -30, ease: 'power2.out' });
    gsap.from('.nav-list li', { opacity: 0, duration: 1, delay: 0.8, stagger: 0.2, ease: 'power2.out' });

    // Gérez l'événement de défilement de la page
    document.addEventListener("scroll", function () {
        // Obtenez la position de la section "Expérience"
        const experienceSection = document.getElementById("experience");
        const rect = experienceSection.getBoundingClientRect();

        // Vérifiez si la section "Expérience" est dans la vue et si l'animation n'a pas encore été déclenchée
        if (rect.top < window.innerHeight && rect.bottom > 0 && !experienceAnimated) {
            // Marquez l'animation comme déclenchée
            experienceAnimated = true;

            // Animez la section "Expérience"
            gsap.to(experienceSection, { opacity: 1, duration: 1, ease: "power2.out" });

            const experienceTitle = experienceSection.querySelector(".title");
            gsap.to(experienceTitle, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });

            const experienceArticles = document.querySelectorAll("#experience .article-container article");
            experienceArticles.forEach((article, index) => {
                gsap.to(article, { opacity: 1, x: 0, duration: 0.8, ease: "power2.out", delay: index * 0.2 });
            });
        }
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


