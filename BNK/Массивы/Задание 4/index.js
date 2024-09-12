const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

const newPrices = prices.map(prices => {
    return prices + 0.5;
});

coffees.forEach((coffeeName, index) => {
    alert(`Кофе ${coffeeName} сейчас стоит ${newPrices[index]} евро`); 
});