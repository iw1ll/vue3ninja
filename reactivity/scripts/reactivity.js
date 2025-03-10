const counterBtn = document.querySelector('.counter');
const resetBtn = document.querySelector('.reset');

const counterState = new Proxy({ value: 5 }, {
    set(target, prop, value) {
        if (prop === 'value') {
            target[prop] = value;
            renderCounter();
            return true;
        }
        return false;
    }
});

function renderCounter() {
    counterBtn.textContent = `Count: ${counterState.value}`;
    counterBtn.classList.toggle('red', isCounterTooBig());
}

function isCounterTooBig() {
    return counterState.value > 10;
}

counterBtn.addEventListener('click', () => {
    counterState.value++;
});

resetBtn.addEventListener('click', () => {
    counterState.value = 0;
});

setInterval(() => {
    counterState.value++;
}, 1000);

renderCounter();