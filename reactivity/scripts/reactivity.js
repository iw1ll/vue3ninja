const counterBtn = document.querySelector('.counter');
const resetBtn = document.querySelector('.reset');

let counter = 5;

function isCounterTooBig() {
    return counter > 10
}

function renderCounter() {
    counterBtn.textContent = `Count: ${counter}`;

    counterBtn.classList.toggle('red', isCounterTooBig());
}

renderCounter();

counterBtn.addEventListener('click', ()=> {
    counter++;
    renderCounter();
});

resetBtn.addEventListener('click', ()=> {
    counter = 0;
    renderCounter();
});