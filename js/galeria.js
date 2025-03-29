const galeria = document.querySelector('#galeria-content > #obrazki > #trzymak');
const countObr     = 9;
const slajdPerObr  = 4;
const countSlajdy  = Math.ceil(countObr/slajdPerObr);

let nrObr = 1;
for(let i = 0; i < countSlajdy; i++){
    let slajd = '<div id="slajd'+i+'">';
    for(let j = 0; j < slajdPerObr; j++){
        if(nrObr <= countObr){
            slajd += '<div class="obrazek"><img src="obrazki/obr'+nrObr+'.jpg" alt="Obrazek '+nrObr+'"></div>';
            nrObr++;
        } else {
            break;
        };
    };
    slajd += '</div>';
    galeria.innerHTML += slajd;
};

const strzLewo      = document.querySelector('#przewinLewo');
const strzPrawo     = document.querySelector('#przewinPrawo');
const obrazki       = document.querySelector('#obrazki');       // "Pudełko z czterema obrazkami"
const trzymak       = document.querySelector('#trzymak');       // Trzyma wszystkie obrazki

const height = obrazki.getBoundingClientRect().height + 4;      // + 4 bo jest gap 4px od flexa w #galeria

let moveTo = 0;
strzPrawo.addEventListener('click', () => {
    if(moveTo >= height*(countSlajdy-1)) return;
    moveTo += height;
    trzymak.style.left = `-${moveTo}px`;
});
strzLewo.addEventListener('click', () => {
    if(moveTo <= 0) return;
    moveTo -= height;
    trzymak.style.left = `-${moveTo}px`;
});

// trzymak.addEventListener('click', (event) => {
//     if(event.target.classList.contains('obrazek')){
//         const images = Array.from(trzymak.querySelectorAll('.obrazek'));
//         const i = images.indexOf(event.target);
//         p.textContent = `Obrazek ${i+1}`;
//     }
// });