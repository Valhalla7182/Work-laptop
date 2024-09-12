    const goals = [8, 1, 1, 3, 2, -1, 5];
    const noAutoLose = goals.filter((goals) => {
        return goals > 0;
    })

    function getBestMatch() {
        let mostGoals = Math.max(...goals);
        let indexOfMostGoals = goals.indexOf(mostGoals);
        console.log(`Самый результативный матч был под номером ${indexOfMostGoals}. В нем было забито ${mostGoals} гол(ов).`)
    }

    function getWorstMatch() {
        let minGoals = Math.min(...noAutoLose);
        let indexesOfWorstMatch = [];
        noAutoLose.forEach((goals, index) => {
            if(goals === minGoals) {
                indexesOfWorstMatch.push(index);
            }
        })
        console.log(`Самые нерезультативные матчи были под номерами ${indexesOfWorstMatch}. В каждом из них было забито по ${minGoals} мячу(а).`);
    }

    function getTotalGoals() {
        
        const totalGoals = noAutoLose.reduce((acc, goals) => {
            return acc += goals;
        })
        console.log(`Общее количество голов за сезон равно ${totalGoals}`);

        
    }

    function getAutoLose() {
    const isAutoLose = goals.some((goals) => {
        return goals > 0;
    })  
    if(isAutoLose) {
        console.log("Были автоматические поражения: да");
    }else {
        console.log("Были автоматические поражения: нет");
    }

    
    }

    function getAverageGoals() {
        const noAutoLose = goals.filter((goals) => {
            return goals > 0;
        })
        const totalGoals = noAutoLose.reduce((acc, goals) => {
            return acc += goals;
        })
        const avgGoals = totalGoals / noAutoLose.length;
        console.log(`Среднее количество голов за матч равно ${Math.round(avgGoals)}`);
    }

    function getSortedGoals() {
        console.log(`Отсортированные голы: ${goals.sort((a ,b) => {
            return a-b;
        })}`);
    }

    getTotalGoals();
    getAverageGoals();
    getAutoLose();
    getBestMatch();
    getWorstMatch();
    getSortedGoals();