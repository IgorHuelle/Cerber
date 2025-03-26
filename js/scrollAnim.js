document.addEventListener("scroll", () => {
    const aboutSection  = document.getElementById("aboutgrid");
    const h2            = aboutSection.querySelector("h2");
    const paragraphs    = aboutSection.querySelectorAll("p");
    const position      = aboutSection.getBoundingClientRect().top;
    const screenHeight  = window.innerHeight;
  
    if(position < screenHeight && !h2.classList.contains("active")) {
        h2.classList.add("active");
    }
  
    paragraphs.forEach((p, i) => {
        if(position < screenHeight && !p.classList.contains("active")) {
            p.classList.add("active");
            p.style.animationDelay = `${(i + 1) * 0.5}s`;
        }
    });
});