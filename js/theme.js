document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle");

    // Wczytanie zapisanego motywu z localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.documentElement.classList.add(savedTheme);
    }

    toggleBtn.addEventListener("click", () => {
        const isDark = document.documentElement.classList.toggle("dark-theme");
        if (isDark) {
            localStorage.setItem("theme", "dark-theme");
        } else {
            localStorage.removeItem("theme");
        }
    });
});