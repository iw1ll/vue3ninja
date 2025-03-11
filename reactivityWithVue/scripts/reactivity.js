import { ref, watchEffect } from 'vue'

const counterBtn = document.querySelector('.counter')
const resetBtn = document.querySelector('.reset')

const counter = ref(5)

watchEffect(() => {
    counterBtn.textContent = `Count: ${counter.value}`
    counterBtn.classList.toggle('red', isCounterTooBig())
})

function isCounterTooBig() {
    return counter.value > 10
}

counterBtn.addEventListener('click', () => {
    counter.value++
})

resetBtn.addEventListener('click', () => {
    counter.value = 0
})

setInterval(() => {
    counter.value++
}, 1000)