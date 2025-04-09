document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observerOptions = {
        threshold: 0.2 // Sekcja musi być w 20% widoczna
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = "0"; // Ustawienie początkowego stanu
        section.style.transform = "translateY(30px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(section);
    });
});