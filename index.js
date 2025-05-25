  document.addEventListener('DOMContentLoaded', function () {
            // Select all navigation links in the main navigation
            const navLinks = document.querySelectorAll('.sidebar .nav-main .nav-link');
            // Select all page sections
            const pageSections = document.querySelectorAll('.page-section');
            // Get the sidebar menu element
            const sidebarMenu = document.getElementById('sidebarMenu');
            // Initialize Bootstrap Collapse for the sidebar, or get existing instance
            const bsSidebar = bootstrap.Collapse.getInstance(sidebarMenu) || new bootstrap.Collapse(sidebarMenu, { toggle: false });

            /**
             * Sets the active section based on the target ID.
             * Hides all sections and then displays the specified one.
             * @param {string} targetId - The ID of the section to activate.
             */
            function setActiveSection(targetId) {
                pageSections.forEach(section => {
                    if (section.id === targetId) {
                        section.classList.add('active-section'); // Add class to show section
                    } else {
                        section.classList.remove('active-section'); // Remove class to hide section
                    }
                });
            }

            // Add event listeners to each navigation link
            navLinks.forEach(link => {
                link.addEventListener('click', function (event) {
                    event.preventDefault(); // Prevent default link behavior (page reload)

                    // Remove 'active' class from all navigation links
                    navLinks.forEach(nav => nav.classList.remove('active'));
                    // Add 'active' class to the clicked link
                    this.classList.add('active');

                    // Get the target section ID from the data-target attribute
                    const targetId = this.getAttribute('data-target');
                    // Activate the corresponding section
                    setActiveSection(targetId);

                    // On mobile, close the sidebar after a link is clicked
                    // Check if window width is less than 768px and sidebar is currently shown
                    if (window.innerWidth < 768 && sidebarMenu.classList.contains('show')) {
                        bsSidebar.hide(); // Hide the Bootstrap collapse sidebar
                    }
                });
            });

            // On initial load, display the first section (Proyectos) and set its link as active
            if (navLinks.length > 0) {
                setActiveSection(navLinks[0].getAttribute('data-target'));
                navLinks[0].classList.add('active');
            }
        });
