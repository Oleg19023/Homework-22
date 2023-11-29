const resultElement = document.getElementById('result');

const additionalInputs0 = document.getElementById('additionalInputs0'); // #0
const additionalInputs = document.getElementById('additionalInputs'); // #1

function UpdateInput() {
    const selectedValue = document.getElementById('question').value;
    additionalInputs0.style.display = (selectedValue === '1') ? 'block' : 'none'; // #0

}

function calculate() {
    const selectedValue = document.getElementById('question').value;


    switch (selectedValue) {
        // Задачи ʕ ᵔᴥᵔ ʔ
        case '1':
            // Рассчет ИМТ
            const weightInput = parseFloat(document.getElementById('Input2').value);
            const heightInput = parseFloat(document.getElementById('Input3').value);

            if (isNaN(weightInput) || isNaN(heightInput) || heightInput <= 0) {
                alert('Введите корректные значения для веса и роста.');
            } else {
                const bmi = weightInput / Math.pow(heightInput, 2);
                const roundedbmi = Math.round(bmi * 10) / 10;

                let bmiCategory;

                if (roundedbmi < 1) {
                    bmiCategory = 'Введите рост в метрах :)';
                }
                else if (roundedbmi < 16) {
                    bmiCategory = 'Выраженный дефицит массы тела';
                } else if (roundedbmi >= 16 && roundedbmi < 18.5) {
                    bmiCategory = 'Дефицит массы тела';
                } else if (roundedbmi >= 18.5 && roundedbmi < 25) {
                    bmiCategory = 'Нормальная масса тела';
                } else if (roundedbmi >= 25 && roundedbmi < 30) {
                    bmiCategory = 'Избыточная масса тела (предожирение)';
                } else if (roundedbmi >= 30 && roundedbmi < 35) {
                    bmiCategory = 'Ожирение I степени';
                } else if (roundedbmi >= 35 && roundedbmi < 40) {
                    bmiCategory = 'Ожирение II степени';
                } else {
                    bmiCategory = 'Ожирение III степени';
                }
                    resultElement.innerHTML = `Индекс массы тела (ИМТ): ${roundedbmi} - ${bmiCategory}`;
                }
                break;
        default:
            alert('Выберите вариант для вычисления.');
    }
}

