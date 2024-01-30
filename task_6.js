let input;
let total = 0;

do {
    input = prompt('Введіть число:');

    if (input !== null) {
        const number = Number(input);

        if (!isNaN(number)) {
            total += number;
        } else {
            alert('Було введено не число, спробуйте ще раз');
        }
    }
} while (input !== null);

alert(`Загальна сума чисел дорівнює ${total}`);