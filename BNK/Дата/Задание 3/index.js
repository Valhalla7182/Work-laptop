function addDays(date, days) {
    const dateNow = new Date(date).getTime();
    const msInDay = 24 * 60 * 60 * 1000;

    const updDate = dateNow + (days * msInDay);

    return new Date(updDate);
}

console.log(addDays("August 6 2024", 3));
