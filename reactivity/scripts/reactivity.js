const counterBtn = document.querySelector('.counter');
const resetBtn = document.querySelector('.reset');

const counterState = {
    _value: 5,

    get value() {
        return this._value;
    },
    set value(newValue) {
        this._value = newValue;
        renderCounter();
    },
};

function renderCounter() {
    counterBtn.textContent = `Count: ${counterState.value}`;
    
    counterBtn.classList.toggle('red', isCounterTooBig());
}

function isCounterTooBig() {
    return counterState.value > 10;
}

counterBtn.addEventListener('click', ()=> {
    counterState.value++;
});

resetBtn.addEventListener('click', ()=> {
    counterState.value = 0;
});

setInterval(() =>{
    counterState.value++;
}, 1000);