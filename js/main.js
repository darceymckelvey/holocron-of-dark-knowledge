// VANILLA JAVASCRIPT
// const navLinks = document.querySelectorAll('.nav-link');

// updateActiveLink = (event) => {
//     navLinks.forEach(link => link.removeAttribute('aria-current'));
//     event.target.setAttribute('aria-current', 'page');
// }

// navLinks.forEach(link => {
//     link.addEventListener('click', updateActiveLink);
// })

// JQUERY
$(document).ready(function () {
    $('.nav-link').on('click', function (e) {
        $('.nav-link').removeAttr('aria-current');
        $(this).attr('aria-current', 'page');
    });
});