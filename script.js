document.addEventListener('DOMContentLoaded', function () {

    // ==========================================
    // Dark Mode Logic
    // ==========================================
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    if (!toggleBtn) return;

    const setLabel = isDark => {
        toggleBtn.innerHTML = isDark
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';
        toggleBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        toggleBtn.setAttribute('title', isDark ? 'Light mode' : 'Dark mode');
    };

    // Restore saved preference (storage can be unavailable, so guard it)
    let savedTheme = null;
    try { savedTheme = localStorage.getItem('theme'); } catch (e) {}

    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        setLabel(true);
    }

    toggleBtn.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark-mode');
        setLabel(isDark);
        try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (e) {}
    });
});
