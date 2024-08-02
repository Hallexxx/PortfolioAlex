window.onload = function () {
    var projectSection = document.getElementById('projects');
    var projectTitle = projectSection.querySelector('.title');
    var projectContainers = projectSection.querySelectorAll('.details-container');

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

    function enlargeElements() {
        if (window.innerWidth > 1150) { // Vérifie la largeur de l'écran
            projectTitle.style.transition = 'transform 1.5s';
            projectTitle.style.transform = 'scale(1.5)';
    
            projectContainers.forEach(function(container) {
                container.style.transition = 'transform 1.5s';
                container.style.transform = 'scale(1.5)';
            });
        } else if (window.innerWidth < 1150 && window.innerWidth > 992) {
            projectTitle.style.transition = 'transform 1.25s';
            projectTitle.style.transform = 'scale(1.25)';
    
            projectContainers.forEach(function(container) {
                container.style.transition = 'transform 1.25s';
                container.style.transform = 'scale(1.25)';
            });
        }
        else if (window.innerWidth < 992) {
            projectTitle.style.transition = 'transform 1.25s';
            projectTitle.style.transform = 'scale(1.1)';
    
            projectContainers.forEach(function(container) {
                container.style.transition = 'transform 1.25s';
                container.style.transform = 'scale(1.1)';
            });
        }
        else if (window.innerWidth < 768) {
            projectTitle.style.transition = 'none';
            projectTitle.style.transform = 'scale(1)';
    
            projectContainers.forEach(function(container) {
                container.style.transition = 'none';
                container.style.transform = 'scale(1)';
            });
        }
    }

    function resetElements() {
        projectTitle.style.transition = 'transform 1s';
        projectTitle.style.transform = originalTitleSize.transform;

        projectContainers.forEach(function (container, index) {
            var originalSize = originalSizes[index];
            container.style.transition = 'transform 1s';
            container.style.transform = originalSize.transform;
        });
    }

    window.addEventListener('scroll', function () {
        var rect = projectSection.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
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
        var destination = document.getElementById("jeuu");

        destination.scrollIntoView({ behavior: "smooth" });

        destination.style.marginTop = "0";
        destination.style.opacity = "1";
    }); 
};

document.addEventListener('DOMContentLoaded', function () {
    let experienceAnimated = false;

    gsap.from(".container .scroll-animation", { opacity: 0, y: 50, duration: 1, delay: 0.5 });

    gsap.from("#experience .article-container article", { opacity: 0, x: -50, stagger: 0.2, duration: 0.8, delay: 1 });

    gsap.from("#projects .details-container", { opacity: 0, y: 30, stagger: 0.2, duration: 1, delay: 1.5 });

    gsap.from('.logo', { opacity: 0, duration: 1, delay: 0.5, y: -30, ease: 'power2.out' });
    gsap.from('.nav-list li', { opacity: 0, duration: 1, delay: 0.8, stagger: 0.2, ease: 'power2.out' });

    document.addEventListener("scroll", function () {
        const experienceSection = document.getElementById("experience");
        const rect = experienceSection.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0 && !experienceAnimated) {
            experienceAnimated = true;

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
