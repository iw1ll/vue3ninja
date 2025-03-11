import { ref, watchEffect, computed } from 'vue'

const counterBtn = document.querySelector('.counter')
const resetBtn = document.querySelector('.reset')

const initialState = {
    counter: 1,
};

const counterState = ref(initialState)
const isCounterTooBig = computed(() => counterState.value.counter > 10);

const renderCounter = () => {
    console.log('html');
    counterBtn.textContent = `Count: ${counterState.value.counter}`
};

const updateCounterColor = () => {
    console.log('color');
    counterBtn.classList.toggle('red', isCounterTooBig.value);
}

watchEffect(() => {
    renderCounter();
});

watchEffect(() => {
    updateCounterColor();
});



counterBtn.addEventListener('click', () => {
    counterState.value.counter++;
});

resetBtn.addEventListener('click', () => {
    counterState.value.counter = 0;
});

setInterval(() => {
    counterState.value.counter++;
}, 1000);