const PROJECTS_URL = 'http://projects.jkhenzai.dev/';

const sections = [
    { id: 'about', file: 'sections/about.html' },
    { id: 'skills', file: 'sections/skills.html' },
    { id: 'certifications', file: 'sections/certifications.html' },
    { id: 'services', file: 'sections/services.html' },
    { id: 'projects', file: 'sections/projects.html' },
    { id: 'vibecoding', file: 'sections/vibecoding.html' },
    { id: 'blog', file: 'sections/blog.html' },
    { id: 'contact', file: 'sections/contact.html' }
];

document.addEventListener('DOMContentLoaded', () => {
    Promise.all(sections.map(section =>
        fetch(section.file)
            .then(response => response.text())
            .then(html => {
                document.getElementById(`${section.id}-container`).innerHTML = html;
            })
    )).then(() => {
        const qrEl = document.getElementById('qrcode');
        if (qrEl && typeof QRCode !== 'undefined') {
            new QRCode(qrEl, { text: 'https://jkhenzai.dev/', width: 150, height: 150 });
        }

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
        document.querySelectorAll('nav a[href^="#"]:not([href="#projects"])').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        const projectsNavLink = document.querySelector('nav a[href="#projects"]');
        if (projectsNavLink) {
            projectsNavLink.addEventListener('click', (event) => {
                event.preventDefault();
                window.location.href = PROJECTS_URL;
            });
        }
    });
});
