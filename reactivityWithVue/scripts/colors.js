import { ref, watchEffect } from 'vue';
import { shuffle } from 'lodash';
const SIZE = 60;

const colors = ref([
    { r: 255, g: 0, b: 0 },
    { r: 0, g: 255, b: 0 },
    { r: 0, g: 0, b: 255 },
]);

watchEffect(() => {
    const container = document.querySelector('#colors');
    container.innerHTML = '';
    
    console.log(container);
    colors.value.forEach((c, i) => {
        const node = document.createElement('div');
    
        node.classList.add('color');
        node.style.backgroundColor = `rgb(${c.r}, ${c.g}, ${c.b})`;
        node.style.borderColor = `rgb(${c.r * 0.8}, ${c.g * 0.8 }, ${c.b * 0.8})`;
        node.style.transform = `translateX(${SIZE * i}px)`;
        container.appendChild(node);
    });
});

document.querySelector('button#add').addEventListener('click', () => {
    if (colors.value.length === 0) {
        colors.value.push(
            { r: 255, g: 0, b: 0 },
            { r: 0, g: 255, b: 0 },
            { r: 0, g: 0, b: 255 },
        );
    } else {
        colors.value.push(
            { 
                r: Math.random() * 255,
                g: Math.random() * 255,
                b: Math.random() * 255,
            },
        );
    }
});

document.querySelector('button#reset').addEventListener('click', () => {
    colors.value = [];
});

document.querySelector('button#shuffle').addEventListener('click', () => {
    colors.value = shuffle(colors.value);
});