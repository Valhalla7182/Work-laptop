function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Создание объектов игрока и врага
const hero = {
  name: 'Batman',
  health: 100,
  heatEnemy(enemy) {
      enemy.health -= 10;
  }
};

const enemy = {
  name: 'Joker',
  health: 100,
  heatHero(hero) {
      hero.health -= 10;
  }
};

// Функция для начала игры
function startGame(heroPlayer, enemyPlayer) {
  while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
      const randomValue = getRandomNumberInRange(0, 1);
      if (randomValue === 0) {
          heroPlayer.heatEnemy(enemyPlayer);
      } else {
          enemyPlayer.heatHero(heroPlayer);
      }
  }

  if (heroPlayer.health > 0) {
      alert(`${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`);
  } else {
      alert(`${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`);
  }
}

// Запуск игры
startGame(hero, enemy);