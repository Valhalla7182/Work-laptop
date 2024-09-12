const coffees = ['Latte', 'Cappuccino', 'Americano'];
const coffeeName = prompt(" Поиск кофе по названию:").toLowerCase();

const matchNamesCoffe = coffees.findIndex((coffee) => {
    if(coffee.toLowerCase() === coffeeName.toLowerCase()) {
       return coffee; 
    }else{
        return coffee;
    }
});
let Popularity = matchNamesCoffe + 1;

// alert(`Держите ваш любимый кофе ${coffeeName}`)
if(coffees[matchNamesCoffe].toLowerCase() === coffeeName.toLowerCase()) {
    alert(`Держите Ваш ${coffees[matchNamesCoffe]}. Он ${Popularity}-й по популярности в нашей кофейне.`); 
 }else {
    alert(`К сожалению, такого кофе нет в наличии`);
 }