document.addEventListener('DOMContentLoaded', () => {
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
        // document.addEventListener('DOMContentLoaded', () => {
        //     "use strict";

        //     /**
        //      * Navbar links active state on scroll
        //      */
        //     let navbarlinks = document.querySelectorAll('#navbarNav .nav-link');

        //     function navbarlinksActive() {
        //         navbarlinks.forEach(navbarlink => {
        //             if (!navbarlink.hash) return; // Skip if no hash
        //             let section = document.querySelector(navbarlink.hash);
        //             if (!section) return; // Skip if section not found

        //             // Calculate position with an offset to activate link slightly before section reaches top
        //             let position = window.scrollY + 200;
        //             if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        //                 navbarlink.classList.add('active');
        //             } else {
        //                 navbarlink.classList.remove('active');
        //             }
        //         })
        //     }
        //     // Add event listeners for load and scroll to update active navbar link
        //     window.addEventListener('load', navbarlinksActive);
        //     document.addEventListener('scroll', navbarlinksActive);

        //     /**
        //      * Scrolls to an element with header offset
        //      * @param {string} el - The CSS selector of the element to scroll to.
        //      */
        //     function scrollto(el) {
        //         let navbar = document.querySelector('.navbar');
        //         let headerOffset = navbar.offsetHeight; // Get the height of the fixed navbar

        //         let elementPosition = document.querySelector(el).offsetTop;
        //         window.scrollTo({
        //             top: elementPosition - headerOffset, // Adjust scroll position by navbar height
        //             behavior: 'smooth' // Smooth scrolling animation
        //         });
        //     }

        //     /**
        //      * Scroll with offset on links with a class name .scrollto (or any link with a hash)
        //      */
        //     document.querySelectorAll('#navbarNav .nav-link[href*="#"]').forEach(link => {
        //         // Ensure the link is internal to the current page
        //         if (link.pathname === window.location.pathname && window.location.hostname === link.hostname) {
        //             link.addEventListener('click', function(e) {
        //                 e.preventDefault(); // Prevent default jump behavior
        //                 let targetEl = document.querySelector(this.hash); // Get the target element
        //                 if (targetEl) {
        //                     scrollto(this.hash); // Scroll to the target element

        //                     // If it's a toggler link, close the mobile navigation menu
        //                     let navbarToggler = document.querySelector('.navbar-toggler');
        //                     // Check if the toggler exists and the menu is currently expanded
        //                     if (navbarToggler && navbarToggler.getAttribute('aria-expanded') === 'true') {
        //                         // Use Bootstrap's Collapse instance to hide the navbar
        //                         bootstrap.Collapse.getInstance(document.getElementById('navbarNav')).hide();
        //                     }
        //                 }
        //             });
        //         }
        //     });

        //     /**
        //      * Back to top button functionality
        //      */
        //     let backtotop = document.querySelector('.back-to-top');
        //     if (backtotop) {
        //         const toggleBacktotop = () => {
        //             if (window.scrollY > 100) { // Show button after scrolling 100px
        //                 backtotop.classList.add('active');
        //             } else {
        //                 backtotop.classList.remove('active');
        //             }
        //         }
        //         // Add event listeners for load and scroll to toggle button visibility
        //         window.addEventListener('load', toggleBacktotop);
        //         document.addEventListener('scroll', toggleBacktotop);
        //         // Add click listener to scroll to top smoothly
        //         backtotop.addEventListener('click', (e) => {
        //             e.preventDefault();
        //             window.scrollTo({ top: 0, behavior: 'smooth' });
        //         });
        //     }

        //     // --- Theme Switcher Logic ---
        //     const themeSwitcher = document.getElementById('theme-switcher');
        //     const themeIcon = themeSwitcher.querySelector('i');

        //     // Function to set theme
        //     const setTheme = (theme) => {
        //         if (theme === 'light') {
        //             document.body.classList.add('light-theme');
        //             themeIcon.classList.remove('fa-sun');
        //             themeIcon.classList.add('fa-moon');
        //             localStorage.setItem('theme', 'light');
        //         } else {
        //             document.body.classList.remove('light-theme');
        //             themeIcon.classList.remove('fa-moon');
        //             themeIcon.classList.add('fa-sun');
        //             localStorage.setItem('theme', 'dark');
        //         }
        //     };

        //     // Initialize theme from local storage or default to dark
        //     const savedTheme = localStorage.getItem('theme') || 'dark';
        //     setTheme(savedTheme);

        //     // Toggle theme on button click
        //     themeSwitcher.addEventListener('click', () => {
        //         const currentTheme = localStorage.getItem('theme');
        //         if (currentTheme === 'dark') {
        //             setTheme('light');
        //         } else {
        //             setTheme('dark');
        //         }
        //     });

        //     // --- Gemini API Integration for Movie Recommendation ---
        //     const generateRecommendationBtn = document.getElementById('generateRecommendationBtn');
        //     const movieInput = document.getElementById('movieInput');
        //     const recommendationOutput = document.getElementById('recommendationOutput');
        //     const recommendationText = document.getElementById('recommendationText');
        //     const loadingIndicator = document.querySelector('#recommendationOutput .loading-indicator');

        //     if (generateRecommendationBtn) {
        //         generateRecommendationBtn.addEventListener('click', async () => {
        //             const userMovieDescription = movieInput.value.trim();

        //             if (!userMovieDescription) {
        //                 recommendationText.textContent = 'Por favor, describe una película para obtener una recomendación.';
        //                 recommendationOutput.style.display = 'block';
        //                 return;
        //             }

        //             // Show loading indicator and hide previous output
        //             recommendationOutput.style.display = 'block';
        //             recommendationText.textContent = '';
        //             loadingIndicator.style.display = 'flex'; // Use flex to center spinner and text

        //             try {
        //                 let chatHistory = [];
        //                 const prompt = `Given the following movie description: "${userMovieDescription}", suggest a similar movie or a few related movies with a brief explanation of why. Keep the explanation concise and in Spanish.`;
        //                 chatHistory.push({ role: "user", parts: [{ text: prompt }] });

        //                 const payload = { contents: chatHistory };
        //                 const apiKey = ""; // Leave as-is, Canvas will provide it at runtime
        //                 const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        //                 const response = await fetch(apiUrl, {
        //                     method: 'POST',
        //                     headers: { 'Content-Type': 'application/json' },
        //                     body: JSON.stringify(payload)
        //                 });

        //                 const result = await response.json();

        //                 if (result.candidates && result.candidates.length > 0 &&
        //                     result.candidates[0].content && result.candidates[0].content.parts &&
        //                     result.candidates[0].content.parts.length > 0) {
        //                     const text = result.candidates[0].content.parts[0].text;
        //                     recommendationText.textContent = text;
        //                 } else {
        //                     recommendationText.textContent = 'No se pudo generar una recomendación. Inténtalo de nuevo.';
        //                 }
        //             } catch (error) {
        //                 console.error('Error calling Gemini API:', error);
        //                 recommendationText.textContent = 'Ocurrió un error al conectar con la IA. Por favor, inténtalo más tarde.';
        //             } finally {
        //                 loadingIndicator.style.display = 'none'; // Hide loading indicator
        //             }
        //         });
        //     }
        // });
