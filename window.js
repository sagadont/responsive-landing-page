window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#444'; // Change background color on scroll
    } else {
        navbar.style.backgroundColor = '#333'; // Reset background color when scrolled back to top
    }
});

var links = document.querySelectorAll('#navbar a');
links.forEach(function(link) {
    link.addEventListener('click', function() {
        links.forEach(function(item) {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});

