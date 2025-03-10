const counterBtn = document.querySelector('.counter');
const resetBtn = document.querySelector('.reset');

function useCounter() {
    let counter = 5;

    function renderCounter() {
        counterBtn.textContent = `Count: ${counter}`;
    
        counterBtn.classList.toggle('red', isCounterTooBig());
    }

    return {
        getCounter() {
            return counter;
        },
        setCounter(newValue) {
            counter = newValue;
            renderCounter();
        }
    }
}

const { getCounter, setCounter } = useCounter();

function isCounterTooBig() {
    return getCounter() > 10;
}

counterBtn.addEventListener('click', ()=> {
    setCounter(getCounter() + 1)
});

resetBtn.addEventListener('click', ()=> {
   setCounter(0)
});

setInterval(() =>{
    setCounter(getCounter() + 1)
}, 1000);