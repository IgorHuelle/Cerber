const items = document.querySelectorAll('#slajdy > div');
const btns  = document.querySelectorAll('.bottom-button');

let timeout, x = 0;

function showItem(i) {
    items.forEach((item, j) => (item.style.display = i === j ? 'block' : 'none'));
};

function addLoadingBar(elm, i) {
    if(elm.innerHTML != '') return;
    
    elm.innerHTML = '<div id="pasek"></div>';
    x = 0;

    clearTimeout(timeout);
    timeoutLoop(elm, i);

    btns.forEach((btn, j) => (btn.innerHTML = i === j ? elm.innerHTML : ''));
}

function timeoutLoop(elm, i) {
    const pasek = document.querySelector('#pasek');
    timeout = setTimeout(() => {
        pasek.style.width = `${++x}%`;

        if(x < 100) {
            timeoutLoop(elm, i);
        } else {
            clearTimeout(timeout);
            x = 0;

            const newIndex = (i+1)%btns.length;
            addLoadingBar(btns[newIndex], newIndex);
            showItem(newIndex);
        }
    }, 50);
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        addLoadingBar(btn, i);
        showItem(i);
    });
});

window.onload = () => {
    addLoadingBar(btns[0], 0);
};