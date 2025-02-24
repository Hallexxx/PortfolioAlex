let currentProjectIndex = 0;
const projectUrls = [
    "../resto_template/HTML/restaurant.html",
    "../barber_template/HTML/barber.html",
    "../garage_template/HTML/garage.html",
    "../garage_template/HTML/garage2.html",
    "../travaux_template/HTML/travaux.html",
    "../hotel_template/HTML/hotel.html"
];

function openProjectPopup(index) {
    currentProjectIndex = index;
    const popup = document.getElementById("projectPopup");
    const iframe = document.getElementById("popupIframe");
    iframe.src = projectUrls[index];
    popup.style.display = "flex"; 
}

function closeProjectPopup() {
    const popup = document.getElementById("projectPopup");
    const iframe = document.getElementById("popupIframe");
    iframe.src = ""; 
    popup.style.display = "none";
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