document.addEventListener('DOMContentLoaded', () => {
    const toggleLinks = document.querySelectorAll('.toggle-description');

    toggleLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const card = this.closest('.card__body');
            card.classList.toggle('expanded');
        });
    });
});