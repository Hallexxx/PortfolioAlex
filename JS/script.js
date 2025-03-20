let currentProjectIndex = 0;
const projectUrls = [
    "https://planetecreche.com",
    "https://apiplatform-symfony.onrender.com/",
    "https://uberalex.onrender.com",
    "https://pokedexreact-ruddy.vercel.app/",
    "https://angularfront-r3fg.onrender.com/"
];

function openProjectPopup(index) {
    currentProjectIndex = index;
    const popup = document.getElementById("projectPopup");
    const iframe = document.getElementById("popupIframe");
    const loadingOverlay = document.getElementById("loadingOverlay");

    loadingOverlay.style.display = "flex"; // Afficher l'overlay de chargement

    iframe.onload = function () {
        loadingOverlay.style.display = "none"; // Masquer l'overlay quand la page est chargée
    };

    iframe.src = projectUrls[index];
    popup.style.display = "flex";
}

function closeProjectPopup() {
    const popup = document.getElementById("projectPopup");
    const iframe = document.getElementById("popupIframe");
    const loadingOverlay = document.getElementById("loadingOverlay");

    iframe.src = ""; 
    popup.style.display = "none";
    loadingOverlay.style.display = "none"; 
}

function nextProject() {
    currentProjectIndex = (currentProjectIndex + 1) % projectUrls.length;
    document.getElementById("popupIframe").src = projectUrls[currentProjectIndex];
}

function previousProject() {
    currentProjectIndex = (currentProjectIndex - 1 + projectUrls.length) % projectUrls.length;
    document.getElementById("popupIframe").src = projectUrls[currentProjectIndex];
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("projectPopup").addEventListener("click", function(event) {
        const popupContent = document.querySelector(".popup-content");
        console.log("Clicked at:", event.target); 
        if (!popupContent.contains(event.target)) { 
            closeProjectPopup();
        }
    });
});

document.addEventListener("scroll", function() {
    var sections = document.querySelectorAll("section");
    var navLinks = document.querySelectorAll(".nav-link");

    sections.forEach(function(section) {
        var sectionTop = section.offsetTop - 100;
        var sectionHeight = section.offsetHeight;
        var scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            var currentId = section.getAttribute("id");
            navLinks.forEach(function(link) {
                link.classList.remove("active");
                if (link.getAttribute("href").includes(currentId)) {
                    link.classList.add("active");
                }
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("SMtd3raQv-lBlSyUv"); 

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const serviceID = 'service_tcrq5ix'; 
        const templateID = 'template_17tai3g'; 

        emailjs.sendForm(serviceID, templateID, this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message envoyé avec succès!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Échec de l\'envoi du message.');
        });
    });
});

AOS.init({
    duration: 1500,
    once: true 
});

window.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth < 768) {
        document.querySelectorAll('[data-aos="flip-left"], [data-aos="flip-right"], [data-aos="fade-left"]').forEach(el => {
            el.removeAttribute('data-aos');
          });          
    }

    document.querySelectorAll('#main-navigation .menu__link').forEach(link => {
        link.addEventListener('click', () => {
          document.getElementById('main-navigation-toggle').checked = false;
        });
      });
  });
  