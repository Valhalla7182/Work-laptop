function getDaysBeforeMyBirthday(nextBirthdayDate) {
    const msNow = new Date().getTime();
    const daysLeft = birthdayDate - msNow

    return convertMsToDays(daysLeft);
}
function convertMsToDays(msNow) {
    return Math.round(msNow / 1000 / 60 / 60 / 24);
}

const birthdayDate = new Date("August 6 2025");
const daysBeforeMyBirthday = getDaysBeforeMyBirthday(birthdayDate);

console.log(`До моего следующего дня рождения осталось ${daysBeforeMyBirthday} дней/дня.`)