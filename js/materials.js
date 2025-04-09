const galeria = document.querySelector('#galeria-content > #obrazki > #trzymak');
const countObr     = 4;
const slajdPerObr  = 1;
const countSlajdy  = Math.ceil(countObr/slajdPerObr);

const strzLewo      = document.querySelector('#przewinLewo');
const strzPrawo     = document.querySelector('#przewinPrawo');
const obrazki       = document.querySelector('#obrazki');       // "Pudełko z czterema obrazkami"
const trzymak       = document.querySelector('#trzymak');       // Trzyma wszystkie obrazki

const width = obrazki.getBoundingClientRect().width + 4;      // + 4 bo jest gap 4px od flexa w #galeria

let moveTo = 0;
strzPrawo.addEventListener('click', () => {
    if(moveTo >= width*(countSlajdy-1)) return;
    moveTo += width;
    trzymak.style.left = `-${moveTo}px`;
});
strzLewo.addEventListener('click', () => {
    if(moveTo <= 0) return;
    moveTo -= width;
    trzymak.style.left = `-${moveTo}px`;
});

// trzymak.addEventListener('click', (event) => {
//     if(event.target.classList.contains('obrazek')){
//         const images = Array.from(trzymak.querySelectorAll('.obrazek'));
//         const i = images.indexOf(event.target);
//         p.textContent = `Obrazek ${i+1}`;
//     }
// });