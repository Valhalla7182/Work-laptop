const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3, 

    checkChancesToWin(defenderObject) {
        const maxChances = Object.keys(defender).length;
        let chances = 0;
        const attackerSoldiers = Object.keys(attacker);
        const defenderSoldiers = Object.keys(defender);
  
        const commonKeys = attackerSoldiers.filter(key => defenderSoldiers.includes(key));

        for (const key of commonKeys) {
            if (attacker[key] > defender[key]) {
                chances++;
            }
          }
        
          let res = [chances, maxChances];
          return res;
        
    },

    improveArmy() {
        const attackerSoldiers = Object.keys(attacker);
        const defenderSoldiers = Object.keys(defender);

        const commonKeys = attackerSoldiers.filter(key => defenderSoldiers.includes(key));
       
        for(const key of commonKeys) {
            attacker[key] += 5;
        }
    },
    
    attack(defender) {
        let chancesToWin = this.checkChancesToWin();
        let percentToWin = (chancesToWin[0] / chancesToWin[1]) * 100;
        
        if(percentToWin < 70) {
            this.improveArmy();
            console.log(`Наши шансы равны ${chancesToWin[0]}/${chancesToWin[1]}. Необходимо укрепление!`)
        }else if(percentToWin > 70) {
            console.log(`Мы усилились! Мы несомненно победим! Наши шансы высоки!`);
        }
    }
 }
 
 const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10,
 }


attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление! 
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление! 
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!



