function appendToExpression(value) {
    document.getElementById('expression').value += value;
}

function clearExpression() {
    document.getElementById('expression').value = '';
    document.getElementById('result').value = '';
}

function calculateResult() {
    try {
        const expression = document.getElementById('expression').value;
        const result = eval(expression);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

// Додаємо кнопки до сторінки
function addButtons() {
    const buttonsContainer = document.body;
    
    const buttonValues = [
        '1', '2', '3', '+',
        '4', '5', '6', '-',
        '7', '8', '9', '*',
        '0', 'C', '=', '/'
    ];

    buttonValues.forEach(value => {
        const button = document.createElement('button');
        button.textContent = value;
        button.onclick = function () {
            if (value === 'C') {
                clearExpression();
            } else if (value === '=') {
                calculateResult();
            } else {
                appendToExpression(value);
            }
        };
        buttonsContainer.appendChild(button);

        // Додаємо тег <br> після кожного рядка кнопок (після 4-ої кнопки)
        if (value === '+' || value === '-' || value === '*' || value === '/') {
            buttonsContainer.appendChild(document.createElement('br'));
        }
    });
}

// Викликаємо функцію для додавання кнопок при завантаженні сторінки
addButtons();