import { ref, watchEffect, computed } from 'vue'

const counterBtn = document.querySelector('.counter')
const resetBtn = document.querySelector('.reset')

const counterState = ref(5)
const isCounterTooBig = computed(() => counterState > 10)

const renderCounter = () => {
    console.log('html');
    counterBtn.textContent = `Count: ${counterState.value}`
};

const updateCounterColor = () => {
    console.log('color');
    counterBtn.classList.toggle('red', isCounterTooBig.value)
}

watchEffect(() => {
    renderCounter();
});

watchEffect(() => {
    updateCounterColor();
});



counterBtn.addEventListener('click', () => {
    counterState.value++;
});

resetBtn.addEventListener('click', () => {
    counterState.value = 0;
});

setInterval(() => {
    counterState.value++;
}, 1000);