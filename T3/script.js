// script.js
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.dataset.value;

            if (value === 'C') {
                currentInput = '';
                previousInput = '';
                operator = '';
                display.textContent = '0';
            } else if (value === '=') {
                if (currentInput && previousInput && operator) {
                    try {
                        display.textContent = eval(`${previousInput} ${operator} ${currentInput}`);
                        currentInput = display.textContent;
                        previousInput = '';
                        operator = '';
                    } catch (error) {
                        display.textContent = 'Error';
                    }
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });
});
