document.addEventListener('DOMContentLoaded', () => {
    const generatedNumberText = document.getElementById('generated-number');
    
    const minNumberInput = document.getElementById('min-number-input');
    const maxNumberInput = document.getElementById('max-number-input');

    const generateButtonElement = document.getElementById('generate-button');
    const resetButtonElement = document.getElementById('reset-button');
    
    generateButtonElement.addEventListener('click', () => {
        const min = parseFloat(minNumberInput.value);
        const max = parseFloat(maxNumberInput.value);

        const hasNumbersInput = !Number.isNaN(min) && !Number.isNaN(max);

        if (!hasNumbersInput) {
            alert('Enter numbers');
            return;
        }

        if (min > max) {
            alert('The min number is greater than the max number');
            return;
        }

        const number = Math.floor(Math.random() * (max - min + 1) + min);

        generatedNumberText.textContent = number;
    });

    resetButtonElement.addEventListener('click', () => {
        minNumberInput.value = null;
        maxNumberInput.value = null;
        generatedNumberText.textContent = null;
    });
});
