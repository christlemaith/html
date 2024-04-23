document.addEventListener('DOMContentLoaded', function() {
    // Navigasi ke bagian tertentu di halaman saat tautan ditekan
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.querySelector(`#${targetId}`);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });


});
