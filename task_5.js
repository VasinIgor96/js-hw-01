let country = prompt('Введіть країну доставки:');

if (country !== null) {
    const formattedCountry = country.toLowerCase();

    let price;

    switch (formattedCountry) {
        case 'китай':
            price = 100;
            break;
        case 'чилі':
            price = 250;
            break;
        case 'австралія':
            price = 170;
            break;
        case 'індія':
            price = 80;
            break;
        case 'ямайка':
            price = 120;
            break;
        default:
            alert('В вашій країні доставка не доступна');
            break;
    }

    if (price !== undefined) {
        alert(`Доставка в ${country} буде коштувати ${price} кредитів.`);
    }
} else {
    alert('Операцію скасовано!');
}