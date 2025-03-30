const items = document.querySelectorAll('.info-item');
const btns  = document.querySelectorAll('.progress-bar');

let timeout, x = 0;

function showItem(i) {
    items.forEach((item, j) => (item.style.display = i === j ? 'block' : 'none'));
};

function addLoadingBar(elm, i) {
    if(elm.innerHTML != '') return;
    
    elm.innerHTML = '<div id="progress"></div>';
    x = 0;

    clearTimeout(timeout);
    timeoutLoop(elm, i);

    btns.forEach((btn, j) => (btn.innerHTML = i === j ? elm.innerHTML : ''));
}

function timeoutLoop(elm, i) {
    const progress = document.querySelector('#progress');
    timeout = setTimeout(() => {
        progress.style.width = `${++x}%`;

        if(x < 100) {
            timeoutLoop(elm, i);
        } else {
            clearTimeout(timeout);
            x = 0;

            const newIndex = (i+1)%btns.length;
            addLoadingBar(btns[newIndex], newIndex);
            showItem(newIndex);
        }
    }, 100);
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