let credits = 23580;
const pricePerDroid = 3000;

let quantityToBuy = prompt('Скільки телевізорів ви хочете купити?');

if (quantityToBuy === null || quantityToBuy.trim() === "") {
    alert('Операцію скасовано!');
} else {
    const quantity = Number(quantityToBuy);

    if (!isNaN(quantity) && quantity > 0) {
        const totalPrice = pricePerDroid * quantity;

        if (totalPrice > credits) {
            alert('Недостатньо коштів на рахунку!');
        } else {
            credits -= totalPrice;
            alert(`Ви купили ${quantity} телевізорів за ${totalPrice} кредитів.\nНа рахунку залишилося ${credits} кредитів.`);
        }
    } else {
        alert('Будь ласка, введіть коректне та додатнє число для кількості телевізорів.');
    }
}
