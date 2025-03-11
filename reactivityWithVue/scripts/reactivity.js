import { ref, watchEffect, watch } from 'vue'

const counterBtn = document.querySelector('.counter')
const resetBtn = document.querySelector('.reset')

const counterState = ref(5)

const renderCounter = () => {
    counterBtn.textContent = `Count: ${counterState.value}`
    counterBtn.classList.toggle('red', isCounterTooBig())
};

watchEffect(() => {
    renderCounter()
});

function isCounterTooBig() {
    return counterState.value > 10
}

counterBtn.addEventListener('click', () => {
    counterState.value++;
})

resetBtn.addEventListener('click', () => {
    counterState.value = 0;
})

setInterval(() => {
    counterState.value++;
}, 1000)