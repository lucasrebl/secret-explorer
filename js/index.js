const counterElement = document.getElementById('counter');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');

let count = 1;

function updateCounter() {
    counterElement.textContent = count;
}

increaseButton.addEventListener('click', () => {
    count++;
    updateCounter();
});

decreaseButton.addEventListener('click', () => {
    if (count > 1) { 
        count--;
        updateCounter();
    }
});

updateCounter();
