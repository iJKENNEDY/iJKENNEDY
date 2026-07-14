const sections = [
    { id: 'hero', file: 'sections/hero.html' },
    { id: 'focus', file: 'sections/focus.html' },
    { id: 'projects', file: 'sections/projects.html' },
    { id: 'philosophy', file: 'sections/philosophy.html' },
    { id: 'engineering', file: 'sections/engineering.html' },
    { id: 'labs', file: 'sections/labs.html' },
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
        // Theme toggle
        const body = document.body;
        const raceModeToggle = document.getElementById('raceModeToggle');
        const contactForm = document.getElementById('contactForm');
        const formMessage = document.getElementById('formMessage');

        const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
            body.classList.add('dark');
        }

        raceModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark');
            localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
        });

        // Contact form handler
        if (contactForm) {
            contactForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const formData = new FormData(contactForm);
                fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                })
                .then(response => {
                    if (response.ok) {
                        formMessage.classList.remove('hidden');
                        formMessage.classList.remove('bg-red-200', 'text-red-800');
                        formMessage.classList.add('bg-green-200', 'text-green-800');
                        formMessage.textContent = 'Message sent successfully. I will get back to you soon.';
                        setTimeout(() => {
                            contactForm.reset();
                            formMessage.classList.add('hidden');
                        }, 3000);
                    } else {
                        formMessage.classList.remove('hidden');
                        formMessage.classList.add('bg-red-200', 'text-red-800');
                        formMessage.textContent = 'Error sending message. Please try again.';
                    }
                })
                .catch(() => {
                    formMessage.classList.remove('hidden');
                    formMessage.classList.add('bg-red-200', 'text-red-800');
                    formMessage.textContent = 'Error sending message. Please try again.';
                });
            });
        }

        // Smooth scroll for internal anchor links
        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    });
});
