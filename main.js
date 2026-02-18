

const sections = [
    { id: 'about', file: 'sections/about.html' },
    { id: 'skills', file: 'sections/skills.html' },
    { id: 'services', file: 'sections/services.html' },
    { id: 'projects', file: 'sections/projects.html' },
    { id: 'vibecoding', file: 'sections/vibecoding.html' },
    { id: 'blog', file: 'sections/blog.html' },
    { id: 'contact', file: 'sections/contact.html' }
];


document.addEventListener('DOMContentLoaded', () => {
    sections.forEach(section => {
        fetch(section.file)
            .then(response => response.text())
            .then(html => {
                document.getElementById(`${section.id}-container`).innerHTML = html;
            });
    });

    const body = document.body;
    const raceModeToggle = document.getElementById('raceModeToggle');
    const toggleIcon = raceModeToggle.querySelector('i');
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
        body.classList.add('dark');
        toggleIcon.classList.remove('fa-moon');
        toggleIcon.classList.add('fa-sun');
    }
    raceModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            toggleIcon.classList.remove('fa-moon');
            toggleIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            toggleIcon.classList.remove('fa-sun');
            toggleIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const data = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        console.log('Form data submitted:', data);
        formMessage.classList.remove('hidden');
        formMessage.classList.remove('bg-red-200', 'text-red-800');
        formMessage.classList.add('bg-green-200', 'text-green-800');
        formMessage.textContent = 'MENSAJE_RECIBIDO: Tu transmisión ha sido enviada al paddock. Permanece a la espera de una respuesta.';
        setTimeout(() => {
            contactForm.reset();
            formMessage.classList.add('hidden');
        }, 3000);
    });
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
});
    // ...existing code...
    
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            // Elimina la clase activa de todos los enlaces
            document.querySelectorAll('nav ul li a').forEach(l => l.classList.remove('text-primary', 'border-b-2', 'border-primary'));
            // Agrega la clase activa al enlace clickeado
            this.classList.add('text-primary', 'border-b-2', 'border-primary');
        });
    });
    
    // ...existing code...
// Highlight active nav link on click and on scroll

// const navLinks = document.querySelectorAll('nav ul li a');
// const sectionIds = Array.from(navLinks).map(link => link.getAttribute('href').replace('#', ''));

// function activateLink(id) {
//     navLinks.forEach(link => {
//         link.classList.remove('text-primary', 'border-b-2', 'border-primary');
//         if (link.getAttribute('href') === `#${id}`) {
//             link.classList.add('text-primary', 'border-b-2', 'border-primary');
//         }
//     });
// }

// // On click: highlight and smooth scroll
// navLinks.forEach(link => {
//     link.addEventListener('click', function(e) {
//         const targetId = this.getAttribute('href').replace('#', '');
//         const section = document.getElementById(targetId) || document.getElementById(`${targetId}-container`);
//         if (section) {
//             e.preventDefault();
//             section.scrollIntoView({ behavior: 'smooth', block: 'start' });
//             activateLink(targetId);
//         }
//     });
// });

// // On scroll: highlight nav link for visible section
// window.addEventListener('scroll', () => {
//     let current = sectionIds[0];
//     for (const id of sectionIds) {
//         const section = document.getElementById(id) || document.getElementById(`${id}-container`);
//         if (section) {
//             const rect = section.getBoundingClientRect();
//             if (rect.top <= 80 && rect.bottom > 80) {
//                 current = id;
//                 break;
//             }
//         }
//     activateLink(current);
//     }
// });  