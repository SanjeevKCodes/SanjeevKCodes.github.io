document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // PART 1: Highlight Active Menu Tab
    // ==========================================
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.nav-tabs a');

    menuItems.forEach(item => {
        // 1. Check if the link matches the current URL exactly
        if (item.href === currentLocation) {
            item.classList.add('active');
        } 
        // 2. Fallback: If on the homepage but URL ends in just "/" (e.g. domain.com/)
        // ensure index.html is highlighted
        else if (currentLocation.endsWith('/') && item.getAttribute('href') === 'index.html') {
            item.classList.add('active');
        }
        else {
            item.classList.remove('active');
        }
    });

    // ==========================================
    // PART 2: Accordion Functionality
    // ==========================================
    const headers = document.querySelectorAll(".accordion-header");
    
    headers.forEach(header => {
        header.addEventListener("click", function() {
            // Toggle the 'active' class (rotates the arrow icon via CSS)
            this.classList.toggle("active");
            
            // Get the content div immediately following the header
            const content = this.nextElementSibling;
            
            // Toggle display
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });

    // ==========================================
    // PART 3: Dark Mode Logic
    // ==========================================
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Safety check: Only run this if the button exists on the page
    if (toggleBtn) {
        
        // A. Check LocalStorage (Remember user preference on refresh)
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            toggleBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        }

        // B. Add Click Event Listener
        toggleBtn.addEventListener('click', () => {
            // Toggle the class
            body.classList.toggle('dark-mode');
            
            // Check if dark mode is now ON or OFF
            if (body.classList.contains('dark-mode')) {
                // It is now Dark
                localStorage.setItem('theme', 'dark'); // Save to storage
                toggleBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode'; // Change text
            } else {
                // It is now Light
                localStorage.setItem('theme', 'light'); // Save to storage
                toggleBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode'; // Change text
            }
        });
    }

});